import { UserContext } from "src/workouts/context/UserContext";
import { PrismaClient } from "@prisma/client";

export class DummyUserContext implements UserContext {
  constructor(private db: PrismaClient) {}

  async getUserId(): Promise<number> {
    const user = await this.db.user.findFirst();
    return user?.id || 0;
  }
}
