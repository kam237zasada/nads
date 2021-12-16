import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TeacherInstance } from "../../DBModels/Teacher";

import db from "../../DBmodels/index";

import { ErrorMessages } from "../../models/common/ErrorMessages";


const Teacher = db.teacher;

const deleteTeacher = async (req: Request, res: Response) => {

    const teacher: TeacherInstance = await Teacher.findByPk(req.params.id);

    if(!teacher) {
        res.status(StatusCodes.NOT_FOUND).send("Nie ma takiego nauczyciela");
    }

    try {
        await Teacher.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(StatusCodes.OK).send({
            message: `Nauczyciel ${teacher.firstName} ${teacher.secondName} usunięty poprawnie`,
            });
    } catch(err) {
        console.log(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorMessages.INTERNAL_SERVER_ERROR);
    }

}

export default deleteTeacher;
