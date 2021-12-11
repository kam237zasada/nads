import { DataTypes, Sequelize } from "sequelize";

export interface CourseStudentInstance {
    CourseId: number,
    StudentId: number
}

const CourseStudent = (sequelize: Sequelize) => {
     return sequelize.define("CourseStudent", {
  });

};

export default CourseStudent;