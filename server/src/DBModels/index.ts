import { Sequelize } from "sequelize";
import { createNamespace } from "cls-hooked";

import Answer from "./Answer";
import Category from "./Category";
import Course from "./Course";
import CourseFile from "./CourseFile";
import CourseStudent from "./CourseStudent";
import Exam from "./Exam";
import ExamQuestion from "./ExamQuestion";
import File from "./File";
import Grade from "./Grade";
import Question from "./Question";
import QuestionAnswer from "./QuestionAnswer";
import SolvedExam from "./SolvedExam";
import Student from "./Student";
import Teacher from "./Teacher";

const cls = createNamespace("namespace");
Sequelize.useCLS(cls);

const db: any = {};

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.answer = Answer(sequelize);
db.category = Category(sequelize);
db.course = Course(sequelize);
db.courseFile = CourseFile(sequelize);
db.courseStudent = CourseStudent(sequelize);
db.exam = Exam(sequelize);
db.examQuestion = ExamQuestion(sequelize);
db.file = File(sequelize);
db.grade = Grade(sequelize);
db.question = Question(sequelize);
db.questionAnswer = QuestionAnswer(sequelize);
db.solvedExam = SolvedExam(sequelize);
db.student = Student(sequelize);
db.teacher = Teacher(sequelize);


export default db;