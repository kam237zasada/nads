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
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    indexNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
}

export default Student;
