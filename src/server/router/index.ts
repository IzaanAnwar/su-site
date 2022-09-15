// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { protectedExampleRouter } from './protected-example-router';
import { user } from './user';
import { sellerData } from './sellerData';
import { getProducts } from './products';

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('example.', exampleRouter)
    .merge('auth.', protectedExampleRouter)
    .merge('user.', user)
    .merge('seller.', sellerData)
    .merge('products.', getProducts);

// export type definition of API
export type AppRouter = typeof appRouter;
