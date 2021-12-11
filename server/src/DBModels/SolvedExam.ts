import { DataTypes, Sequelize } from "sequelize";

export interface SolvedExamInstance {
    id: number,
    examId: number,
    studentId: number,
    startTime: Date,
    endTime: Date,
    points: number,
    grade: number
}

const SolvedExam = (sequelize: Sequelize) => {
    return sequelize.define("SolvedExam", {
    
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    grade: {
        type: DataTypes.DOUBLE(4,1),
        allowNull: false
    }
})
}

export default SolvedExam;
