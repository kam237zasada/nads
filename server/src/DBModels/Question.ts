import { DataTypes, Sequelize } from "sequelize";

export interface QuestionInstance {
    id: number,
    question: string,
    isSingleChoice: boolean,
    examId: number
}

const Question = (sequelize: Sequelize) => {
    return sequelize.define("Question", {
    
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isSingleChoice: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})
}

export default Question;
