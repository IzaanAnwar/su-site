// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { protectedExampleRouter } from './protected-example-router';
import { user } from './user';

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('example.', exampleRouter)
    .merge('auth.', protectedExampleRouter)
    .merge('user.', user);

// export type definition of API
export type AppRouter = typeof appRouter;
