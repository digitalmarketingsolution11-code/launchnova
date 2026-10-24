import { getDb } from "./connection";
import { subscribers } from "@db/schema";
import { eq } from "drizzle-orm";

export async function findSubscriberByEmail(email: string) {
  return getDb().query.subscribers.findFirst({
    where: eq(subscribers.email, email),
  });
}

export async function createSubscriber(data: { email: string; name?: string; source?: string }) {
  const [{ id }] = await getDb()
    .insert(subscribers)
    .values({
      email: data.email,
      name: data.name || null,
      source: data.source || "website",
    })
    .onDuplicateKeyUpdate({
      set: { name: data.name || null },
    })
    .$returningId();

  return getDb().query.subscribers.findFirst({
    where: eq(subscribers.id, id),
  });
}
