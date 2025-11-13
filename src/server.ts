import express from "express";
import cors from "cors";
import { router } from "./routes.js";

const service = express();
service.use(cors());
service.use(express.json());
service.use(router);

export {service}