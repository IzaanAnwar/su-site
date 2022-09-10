import { createRouter } from './context';
import { z } from 'zod';

export const sellerData = createRouter().query('getData', {
    input: z.object({
        email: z.string(),
    }),
    async resolve({ ctx, input }) {
        const data = ctx.prisma.seller.findFirst({
            where: {
                email: input.email,
            },
            include: {
                products: {},
            },
        });
        return data;
    },
});
