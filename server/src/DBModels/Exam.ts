import { DataTypes, Sequelize } from "sequelize";

export interface ExamInstance {
    id: number,
    name: string,
    courseId: number,
    openTime: Date,
    endTime: Date,
    questionsNumber: number,
    maxTime: number,
    gradeId: number
}

const Exam = (sequelize: Sequelize) => {
    return sequelize.define("Exam", {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    openTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: true
    },
    questionsNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxTime: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
}

export default Exam;
