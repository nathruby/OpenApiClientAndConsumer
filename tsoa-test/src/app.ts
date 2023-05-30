// src/app.ts
import express, {json, urlencoded, Request as ExRequest, Response as ExResponse} from "express";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import fs from "fs";

export const app = express();
const file : string = fs.readFileSync('./build/swagger.yaml', 'utf-8');
const swaggerDocument = YAML.parse(file);

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(json());

RegisterRoutes(app);