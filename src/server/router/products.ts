import { resolve } from 'path';
import { z } from 'zod';
import { createRouter } from './context';

export const getProducts = createRouter()
    .query('getAllData', {
        async resolve({ ctx }) {
            try {
                const data = await ctx.prisma.user.findMany({
                    where: {},
                    include: {
                        products: {},
                    },
                });

                const allProducts = [];
                for (let i = 0; i < data.length; i++) {
                    const sellerProduct = data[i]?.products.map((data) => {
                        return data;
                    });
                    allProducts[i] = sellerProduct && sellerProduct[i];
                }
                return allProducts;
            } catch (error) {
                console.log(error);
                return;
            }
        },
    })
    .mutation('updateRating', {
        input: z.object({ rating: z.string(), productId: z.string() }),
        async resolve({ ctx, input }) {
            const Selproduct = await ctx.prisma.product.findFirst({
                where: { id: input.productId },
            });
            if (Selproduct?.rating) {
                const oldRating = Number(Selproduct.rating);
                const numberOfRatings = Number(Selproduct.numRated);
                if (numberOfRatings > 1) {
                    const avgRating =
                        oldRating + Number(input.rating) / numberOfRatings;
                    try {
                        await ctx.prisma.product.update({
                            where: { id: input.productId },
                            data: {
                                rating: `${avgRating}`,
                                numRated: `${numberOfRatings + 1}`,
                            },
                        });
                    } catch (error) {}
                } else {
                    try {
                        await ctx.prisma.product.update({
                            where: { id: input.productId },
                            data: {
                                rating: input.rating,
                                numRated: `${numberOfRatings + 1}`,
                            },
                        });
                    } catch (error) {
                        console.log(error);
                        return;
                    }
                }
            } else {
                try {
                    await ctx.prisma.product.update({
                        where: { id: input.productId },
                        data: { rating: input.rating, numRated: '1' },
                    });
                } catch (error) {
                    console.log(error);
                    return;
                }
            }

            return;
        },
    })
    .query('getByID', {
        input: z.object({ productID: z.string() }),
        async resolve({ ctx, input }) {
            const product = await ctx.prisma.product.findFirst({
                where: { id: input.productID },
            });
            if (product) return product;
            return;
        },
    });
