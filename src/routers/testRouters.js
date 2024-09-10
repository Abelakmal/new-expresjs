import { Router } from "express";
import * as testController from "../controllers/testController.js";

const testRouters = Router();

testRouters.get("/", testController.getTest);
testRouters.post("/", testController.createTest);

export default testRouters;
