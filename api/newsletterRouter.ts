import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { createSubscriber, findSubscriberByEmail } from "./queries/subscribers";

export const newsletterRouter = createRouter({
  subscribe: publicQuery
    .input(
      z.object({
        email: z.string().email("Please enter a valid email address"),
        name: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const existing = await findSubscriberByEmail(input.email);
      if (existing) {
        return {
          success: true,
          message: "You're already subscribed! Thank you for being with us.",
          alreadySubscribed: true,
        };
      }

      const subscriber = await createSubscriber({
        email: input.email,
        name: input.name,
        source: "website",
      });

      return {
        success: true,
        message: "Thank you for subscribing! Check your email for a welcome message.",
        alreadySubscribed: false,
        subscriber,
      };
    }),

  stats: publicQuery.query(async () => {
    return { ok: true };
  }),
});
