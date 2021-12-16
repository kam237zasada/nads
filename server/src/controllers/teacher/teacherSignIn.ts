import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TeacherInstance, validateTeacherSignIn } from "../../DBModels/Teacher";

import db from "../../DBmodels/index";

import { TeacherSignIn } from "../../models/request/TeacherRequests";
import { ErrorMessages } from "../../models/common/ErrorMessages";
import { checkPassword } from "../../helpers/checkPassword";


const Teacher = db.teacher;

const teacherSignIn = async (req: Request, res: Response) => {

    let teacher: TeacherInstance;
    const body: TeacherSignIn = req.body;

    const { error } = validateTeacherSignIn(body);

    if(error) { return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message)};

    try {
        teacher = await Teacher.findOne({
            where: {
                email: body.email
            }
        });
    } catch(err) {
        console.log(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorMessages.INTERNAL_SERVER_ERROR);
    }

    if(!teacher) {
        return res.status(StatusCodes.BAD_REQUEST).send("Email lub hasło są nieprawidłowe");
    }

    const isPasswordRight = await checkPassword(body.password, teacher.password);

    if(!isPasswordRight) {
        return res.status(StatusCodes.BAD_REQUEST).send("Email lub hasło są nieprawidłowe");
    }

    return res.status(StatusCodes.OK).send({
        message: "Zalogowany poprawnie",
        teacher: {
            id: teacher.id,
            email: teacher.email,
            firstName: teacher.firstName,
            secondName: teacher.secondName,
            role: teacher.role
        }
    })

}

export default teacherSignIn;
