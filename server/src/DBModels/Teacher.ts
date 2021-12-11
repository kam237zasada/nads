import { DataTypes, Sequelize } from "sequelize";

export interface TeacherInstance {
    id: number,
    firstName: string,
    secondName: string,
    email: string,
    password: string,
    role: string
}

const Teacher = (sequelize: Sequelize) => {
    return sequelize.define("Teacher", {
    
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secondName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
}

export default Teacher;
