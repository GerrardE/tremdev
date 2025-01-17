import express from "express";
import debug from "debug";
import { config } from "dotenv";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import apis from "@routes/api";
import errorHandler from "@helpers/errorHandler";
import swaggerSpec from "./config/swagger";

const debugged = debug("index");
config();

const index = express();
const port = process.env.PORT || 5000;

// Use the CORS
index.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

index.use(logger("dev"));
index.use(bodyParser.json({ limit: "50mb" }));
index.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: true
}));

index.use("/api/v1", apis);

// swagger-ui-express for API endpoint documentation
index.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

index.use((request, response, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

index.use(errorHandler);

index.listen(port, () => {
  debugged(`Listening from port ${port}`);
  // eslint-disable-next-line no-console
  console.log(`Listening from port ${port}`);
});

export default index;
