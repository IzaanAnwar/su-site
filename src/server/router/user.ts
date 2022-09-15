import { createRouter } from './context';
import { z } from 'zod';

export const user = createRouter()
    .query('getUser', {
        input: z
            .object({
                email: z.string().nullish(),
            })
            .nullish(),
        async resolve({ ctx, input }) {
            const data = await ctx.prisma.user.findFirst({
                where: {
                    email: input?.email,
                },
                include: {
                    productsBought: {},
                },
            });
            return data;
        },
    })
    .mutation('assignRole', {
        input: z.object({ email: z.string().email() }),
        async resolve({ ctx, input }) {
            const user = await ctx.prisma.user.findFirst({
                where: {
                    AND: [
                        {
                            email: input.email,
                            role: 'seller',
                        },
                    ],
                },
            });
            if (!user) {
                try {
                    await ctx.prisma.user.update({
                        where: { email: input.email },
                        data: { role: 'seller' },
                    });
                } catch (error) {
                    console.log(error);
                    return error;
                }
            }

            return;
        },
    });
