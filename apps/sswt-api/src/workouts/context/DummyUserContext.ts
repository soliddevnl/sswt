import { inject, injectable } from "inversify";
import { UserContext } from "src/workouts/context/UserContext";
import { PrismaClient } from "@prisma/client";
import TYPES from "src/container/types";

@injectable()
export class DummyUserContext implements UserContext {
  constructor(@inject(TYPES.PrismaClient) private db: PrismaClient) {}

  async getUserId(): Promise<number> {
    const user = await this.db.user.findFirst();
    return user?.id || 0;
  }
}
