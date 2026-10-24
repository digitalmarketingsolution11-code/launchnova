import { createRouter, publicQuery } from "./middleware";
import { newsletterRouter } from "./newsletterRouter";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  newsletter: newsletterRouter,
});

export type AppRouter = typeof appRouter;
