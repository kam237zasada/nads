import { DataTypes, Sequelize } from "sequelize";

export interface StudentInstance {
    id: number,
    firstName: string,
    secondName: string,
    email: string,
    password: string,
    indexNumber: number,
}

const Student = (sequelize: Sequelize) => {
    return sequelize.define("Student", {
    
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
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    indexNumber: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
})
}

export default Student;
