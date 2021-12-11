import { DataTypes, Sequelize } from "sequelize";

export interface QuestionAnswerInstance {
    QuestionId: number,
    AnswerId: number
}

const QuestionAnswer = (sequelize: Sequelize) => {
     return sequelize.define("QuestionAnswer", {
  });

};

export default QuestionAnswer;