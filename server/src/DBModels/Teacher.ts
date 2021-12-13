import { DataTypes, Sequelize } from "sequelize";
import Joi from "joi";
import { AddTeacher } from "../models/request/AddTeacher";

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

export function validateAddTeacher(teacher: AddTeacher) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        firstName: Joi.string().required(),
        secondName: Joi.string().required(),
        password: Joi.string().min(8).required(),
        confirmPassword: Joi.string().min(8).required(),
        role: Joi.string().required()
    })

    return schema.validate(teacher);
}

export default Teacher;
