import { Request, Response } from "express";
import { Op } from "sequelize";
import { StatusCodes } from "http-status-codes";
import { TeacherInstance, validateUpdateTeacher } from "../../DBModels/Teacher";

import db from "../../DBmodels/index";

import { UpdateTeacher } from "../../models/request/TeacherRequests";
import { ErrorMessages } from "../../models/common/ErrorMessages";
import { checkPassword } from "../../helpers/checkPassword";


const Teacher = db.teacher;

const updateTeacher = async (req: Request, res: Response) => {
    const body: UpdateTeacher = req.body;

    const { error } = validateUpdateTeacher(body);

    if(error) { return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message)};

    const teacherExists: TeacherInstance = await Teacher.findOne({
        where: {
            [Op.and]: [
                {
                    email: body.email,
                    id: {
                        [Op.not]: req.params.id
                    }
                }
            ]
        }
    });

    if(teacherExists) {
        return res.status(StatusCodes.BAD_REQUEST).send("Konto nauczyciela z takim adresem email już istnieje. Prosze podaj inny email")
    }

    const teacher: TeacherInstance = await Teacher.findByPk(req.params.id);

    if(!teacher) {
        res.status(StatusCodes.NOT_FOUND).send("Nie ma takiego nauczyciela");
    }

    const isPasswordRight = await checkPassword(body.password, teacher.password);

    if(!isPasswordRight) {
        return res.status(StatusCodes.BAD_REQUEST).send("Podane hasło jest niepoprawne");
    }

    try {
        await Teacher.update({
            email: body.email,
            firstName: body.firstName,
            secondName: body.secondName
        }, {
            where: {
                id: req.params.id
            }
        })

        return res.status(StatusCodes.OK).send({
            message: "Dane zaktualizowane",
            teacher: {
                id: req.params.id,
                email: body.email,
                firstName: body.firstName,
                secondName: body.secondName,
                role: teacher.role
            }});
    } catch(err) {
        console.log(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorMessages.INTERNAL_SERVER_ERROR);
    }

}

export default updateTeacher;
