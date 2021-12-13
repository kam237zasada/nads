import { Sequelize } from "sequelize";
import { createNamespace } from "cls-hooked";

import Answer from "./Answer";
import Category from "./Category";
import Course from "./Course";
import CourseStudent from "./CourseStudent";
import Exam from "./Exam";
import File from "./File";
import Grade from "./Grade";
import Question from "./Question";
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
db.courseStudent = CourseStudent(sequelize);
db.exam = Exam(sequelize);
db.file = File(sequelize);
db.grade = Grade(sequelize);
db.question = Question(sequelize);
db.solvedExam = SolvedExam(sequelize);
db.student = Student(sequelize);
db.teacher = Teacher(sequelize);

// student-course

db.student.belongsToMany(db.course, {through: db.courseStudent, as: "Courses"});
db.course.belongsToMany(db.student, {through: db.courseStudent, as: "Students"});

//teacher-course

db.course.belongsTo(db.teacher, { foreignKey: "teacherId", as: "Teacher"});
db.teacher.hasMany(db.course, { foreignKey: "teacherId", as: "Courses"});

//category-course

db.course.hasMany(db.category, { foreignKey: "courseId", as: "Categories"});
db.category.belongsTo(db.course, { foreignKey: "courseId", as: "Course"});

//file-course

db.file.belongsTo(db.course, { foreignKey: "courseId", as: "Course"});
db.course.hasMany(db.file, { foreignKey: "courseId"});

//file-category

db.file.belongsTo(db.category, { foreignKey: "categoryId", as: "Category"});
db.category.hasMany(db.file, { foreignKey: "categoryId"});

//course-exam

db.course.hasMany(db.exam, { foreignKey: "courseId"});
db.exam.belongsTo(db.course, { foreignKey: "courseId", as: "Course"});

//exam-grade

db.grade.hasMany(db.exam, { foreignKey: "gradeId"});
db.exam.belongsTo(db.grade, { foreignKey: "gradeId", as: "Grade"})

//exam-question

db.exam.hasMany(db.question, { foreignKey: "examId", as: "Questions"});
db.question.belongsTo(db.exam, { foreignKey: "examId", as: "Exam"});

//question-answer

db.question.hasMany(db.answer, { foreignKey: "questionId", as: "Answers"});
db.answer.belongsTo(db.question, {foreignKey: "questionId", as: "Question"});

//solvedexam-student

db.solvedExam.belongsTo(db.student, { foreignKey: "studentId", as: "Student"});
db.student.hasMany(db.solvedExam, { foreignKey: "studentId"});

db.solvedExam.belongsTo(db.exam, { foreignKey: "examId", as: "Exam"});
db.exam.hasMany(db.solvedExam, { foreignKey: "examId", as: "SolvedExams"});

export default db;