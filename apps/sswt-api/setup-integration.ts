import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export default async function setup() {
  await db.user.create({
    data: {
      email: "test@example.com",
    },
  });
}
