import express, { Request, Response } from "express";
import "reflect-metadata"
import swaggerUi from "swagger-ui-express";
import {router} from "./routes";
import swaggerFile from "./swagger.json";
import "./database"
import { configServer } from "./database";

configServer()
const app = express();

app.use(express.json());
app.use(router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req: Request, res: Response) => {
  console.log("Hello fuck")
  return res.json({ message: "Hello World!" });
});

app.post("/courses", (req: Request, res: Response) => {
  const { name } = req.body;

  return res.json({ name });
});
app.listen(3333, () => {
  console.log("Server is running!");
});
