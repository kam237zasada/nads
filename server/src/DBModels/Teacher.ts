import { DataTypes, Sequelize } from "sequelize";
import Joi from "joi";
import { AddTeacher, TeacherSignIn, UpdateTeacher, UpdateTeacherPassword } from "../models/request/TeacherRequests";

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
        unique: true,
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
        firstName: Joi.string().min(3).max(50).required(),
        secondName: Joi.string().min(2).max(50).required(),
        password: Joi.string().min(8).required(),
        confirmPassword: Joi.string().min(8).required(),
        role: Joi.string().required()
    })

    return schema.validate(teacher);
}

export function validateUpdateTeacher(teacher: UpdateTeacher) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        firstName: Joi.string().min(3).max(50).required(),
        secondName: Joi.string().min(2).max(50).required(),
        password: Joi.string().required()
    })

    return schema.validate(teacher);
}

export function validateUpdateTeacherPassword(teacher: UpdateTeacherPassword) {
    const schema = Joi.object({
        currentPassword: Joi.string().required(),
        newPassword: Joi.string().min(8).required(),
        confirmNewPassword: Joi.string().required()
    })

    return schema.validate(teacher);
}

export function validateTeacherSignIn(teacher: TeacherSignIn) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    return schema.validate(teacher);
}

export default Teacher;
