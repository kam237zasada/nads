import { DataTypes, Sequelize } from "sequelize";

export interface CourseInstance {
    id: number,
    name: string,
    isPublic: boolean,
    password?: string,
    teacherId: number
}

const Course = (sequelize: Sequelize) => {
    return sequelize.define("Course", {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
})
}

export default Course;
