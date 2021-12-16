import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TeacherInstance, validateUpdateTeacherPassword } from "../../DBModels/Teacher";

import db from "../../DBmodels/index";

import { UpdateTeacherPassword } from "../../models/request/TeacherRequests";
import { ErrorMessages } from "../../models/common/ErrorMessages";
import { checkPassword } from "../../helpers/checkPassword";
import { hashPassword } from "../../helpers/hashPassword";


const Teacher = db.teacher;

const updateTeacherPassword = async (req: Request, res: Response) => {
    const body: UpdateTeacherPassword = req.body;

    const { error } = validateUpdateTeacherPassword(body);

    if(error) { return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message)};

    if(body.newPassword !== body.confirmNewPassword) { return res.status(StatusCodes.BAD_REQUEST).send("Podane hasła muszą być identyczne")};

    const teacher: TeacherInstance = await Teacher.findByPk(req.params.id);

    if(!teacher) {
        res.status(StatusCodes.NOT_FOUND).send("Nie ma takiego nauczyciela");
    }

    const isPasswordRight = await checkPassword(body.currentPassword, teacher.password);

    if(!isPasswordRight) {
        return res.status(StatusCodes.BAD_REQUEST).send("Podane obecne hasło jest niepoprawne");
    }

    const hashedPassword = await hashPassword(body.newPassword);

    try {
        await Teacher.update({
            password: hashedPassword
        }, {
            where: {
                id: req.params.id
            }
        })

        return res.status(StatusCodes.OK).send({
            message: "Hasło zaktualizowane",
            teacherId: req.params.id
            });
    } catch(err) {
        console.log(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorMessages.INTERNAL_SERVER_ERROR);
    }

}

export default updateTeacherPassword;
