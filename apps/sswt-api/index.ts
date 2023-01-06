import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello World, Soliddev!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
