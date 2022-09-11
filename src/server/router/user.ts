import { createRouter } from './context';
import { z } from 'zod';

export const user = createRouter().query('getUser', {
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
});
