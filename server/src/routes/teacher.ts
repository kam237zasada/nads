import express from "express";
const router = express.Router();
import addTeacher from "../controllers/teacher/addTeacher";

router.post("/", addTeacher);

export default router;