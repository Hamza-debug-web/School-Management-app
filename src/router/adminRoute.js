import express from "express";
import * as adminController from "../controller/adminController.js"

const router = express.Router();

router.post("/login", adminController.login)

export default router;