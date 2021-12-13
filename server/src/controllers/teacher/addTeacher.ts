import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TeacherInstance, validateAddTeacher } from "../../DBModels/Teacher";

import db, { sequelize } from "../../DBmodels/index";

import { AddTeacher } from "../../models/request/AddTeacher";
import { ErrorMessages } from "../../models/common/ErrorMessages";
import { hashPassword } from "../../helpers/hashPassword";


const Teacher = db.teacher;

const addTeacher = async (req: Request, res: Response) => {
    const body: AddTeacher = req.body;

    const { error } = validateAddTeacher(body);

    if(error) { return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message)};

    if(body.password !== body.confirmPassword) { return res.status(StatusCodes.BAD_REQUEST).send("Podane hasła muszą być identyczne")};

    const hashedPassword = await hashPassword(body.password);

    try {
        const teacher: TeacherInstance = await Teacher.create({
            email: body.email,
            firstName: body.firstName,
            secondName: body.secondName,
            password: hashedPassword,
            role: body.role
        }, {
            fields: ["email", "firstName", "secondName", "role"]
        })

        return res.status(StatusCodes.OK).send(teacher);
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorMessages.INTERNAL_SERVER_ERROR);
    }

}

export default addTeacher;
