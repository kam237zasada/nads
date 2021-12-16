import express from "express";
const router = express.Router();
import addTeacher from "../controllers/teacher/addTeacher";
import teacherSignIn from "../controllers/teacher/teacherSignIn";
import updateTeacher from "../controllers/teacher/updateTeacher";
import updateTeacherPassword from "../controllers/teacher/updateTeacherPassword";
import deleteTeacher from "../controllers/teacher/deleteTeacher";

router.post("/", addTeacher);
router.post("/signin", teacherSignIn);
router.put("/:id", updateTeacher);
router.put("/password/:id", updateTeacherPassword);
router.delete("/:id", deleteTeacher);

export default router;