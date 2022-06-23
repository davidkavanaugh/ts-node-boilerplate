import express, { Request, Response } from "express";
import { loggingMiddlewear } from "./middlewear/logging.middlewear";
import * as mongoClient from "./clients/mongo.client";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(loggingMiddlewear);

app.get("*", function (err: any, req: Request, res: Response, next: any) {
    res.status(200).send("Hello World");
})

mongoClient.init();

app.listen(process.env.API_PORT, () =>
  console.log(`API server has started at port ${process.env.API_PORT}`)
);
