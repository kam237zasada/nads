import { DataTypes, Sequelize } from "sequelize";

export interface CourseFileInstance {
    CourseId: number,
    FileId: number,
    CategoryId: number
}

const CourseFile = (sequelize: Sequelize) => {
     return sequelize.define("CourseFile", {
  });

};

export default CourseFile;