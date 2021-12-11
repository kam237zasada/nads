import { DataTypes, Sequelize } from "sequelize";

export interface AnswerInstance {
    id: number,
    questionId: number,
    answer: string,
    isRight: boolean
}

const Answer = (sequelize: Sequelize) => {
    return sequelize.define("Answer", {
    
    answer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isRight: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})
}

export default Answer;
