import { createRouter } from './context';
import { z } from 'zod';
import { resolve } from 'path';

export const sellerData = createRouter()
    .query('getData', {
        input: z.object({
            email: z.string(),
        }),
        async resolve({ ctx, input }) {
            const data = ctx.prisma.user.findFirst({
                where: {
                    email: input.email,
                },
                include: {
                    products: {},
                },
            });
            return data;
        },
    })
    .mutation('addProduct', {
        input: z.object({
            name: z.string(),
            image: z.string(),
            stock: z.string(),
            size: z.string(),
            price: z.string(),
            description: z.string(),
            email: z.string().email(),
        }),
        async resolve({ ctx, input }) {
            const seller = await ctx.prisma.user.findFirst({
                where: { email: input.email },
            });
            if (seller) {
                const data = await ctx.prisma.product.create({
                    data: {
                        name: input.name,
                        size: input.size,
                        image: input.image,
                        stock: input.stock,
                        price: input.price,
                        description: input.description,

                        userId: seller.id,
                    },
                });
                return data;
            }
        },
    })
    .mutation('updateProduct', {
        input: z.object({
            data: z.string(),
            productId: z.string(),
        }),
        async resolve({ ctx, input }) {
            if (input.data === 'stock') {
                const updatedData = await ctx.prisma.product.update({
                    where: {
                        id: input.productId,
                    },
                    data: {
                        stock: input.data,
                    },
                });
                return updatedData;
            } else if (input.data === 'size') {
                const updatedData = await ctx.prisma.product.update({
                    where: {
                        id: input.productId,
                    },
                    data: {
                        size: input.data,
                    },
                });
                return updatedData;
            } else if (input.data === 'price') {
                const updatedData = await ctx.prisma.product.update({
                    where: {
                        id: input.productId,
                    },
                    data: {
                        price: input.data,
                    },
                });
                return updatedData;
            } else if (input.data === 'image') {
                const updatedData = await ctx.prisma.product.update({
                    where: {
                        id: input.productId,
                    },
                    data: {
                        image: input.data,
                    },
                });
                return updatedData;
            } else if (input.data === 'name') {
                const updatedData = await ctx.prisma.product.update({
                    where: {
                        id: input.productId,
                    },
                    data: {
                        name: input.data,
                    },
                });
                return updatedData;
            } else if (input.data === 'description') {
                const updatedData = await ctx.prisma.product.update({
                    where: {
                        id: input.productId,
                    },
                    data: {
                        description: input.data,
                    },
                });
                return updatedData;
            }
        },
    });
