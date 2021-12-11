import { DataTypes, Sequelize } from "sequelize";

export interface CategoryInstance {
    id: number,
    name: string,
    courseId: number
}

const Category = (sequelize: Sequelize) => {
    return sequelize.define("Category", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
}

export default Category;
