import { DataTypes, Sequelize } from "sequelize";

export interface ExamQuestionInstance {
    QuestionId: number,
    ExamId: number
}

const ExamQuestion = (sequelize: Sequelize) => {
     return sequelize.define("ExamQuestion", {
  });

};

export default ExamQuestion;