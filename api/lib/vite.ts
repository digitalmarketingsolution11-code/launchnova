import type { Hono } from "hono";

export function serveStaticFiles(app: Hono) {
  app.get("*", (c) => c.env.ASSETS.fetch(c.req.raw));
}
