import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';
import { hash } from 'bcrypt';
import { z } from 'zod';

export type User = {
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'POST') {
        return res.status(404).json({ error: 'Inavalid Request Method!' });
    }
    const UserZ = z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        password: z.string().min(8),
    });
    console.log(req.body);

    try {
        const zod = UserZ.parse(req.body);
        console.log(zod, 'zosssss');

        const userExists = await prisma.seller.findFirst({
            where: {
                OR: [
                    {
                        email: zod.email,
                    },
                    {
                        phone: zod.phone,
                    },
                ],
            },
        });
        if (userExists) {
            return res.status(200).json({ message: 'User Exsits' });
        }
        hash(zod.password, 10, async (error, hashedPassword) => {
            if (error) return res.json({ error });
            else {
                try {
                    const user = await prisma.seller.create({
                        data: {
                            email: zod.email,
                            name: zod.name,
                            password: hashedPassword,
                            phone: zod.phone,
                        },
                    });

                    return res
                        .status(201)
                        .json({ message: 'User Registered', data: user });
                } catch (error) {
                    return res.status(500).json({ error });
                }
            }
        });
    } catch (err) {
        console.log(err);

        return res.status(400).json({ error: err });
    }
}
