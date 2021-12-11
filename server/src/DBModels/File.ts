import { DataTypes, Sequelize } from "sequelize";

export interface FileInstance {
    id: number,
    name: string,
    courseId: number,
    fileType: string,
    uuid: string,
    categoryId: number
}

const File = (sequelize: Sequelize) => {
    return sequelize.define("File", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uuid: {
        type: DataTypes.UUID,
        allowNull: false
    }
})
}

export default File;
