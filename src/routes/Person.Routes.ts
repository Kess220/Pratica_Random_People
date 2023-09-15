import express, { Router } from "express";
import { getPersonController } from "../controller/PersonController";

const router: Router = express.Router();

router.get("/person", getPersonController); 

export default router;
