import dotenv from "dotenv";
import { buildApp } from "src/app";

dotenv.config();

const port = process.env.PORT || 3000;

async function start() {
  const { app } = await buildApp();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

void start();
