import { DataTypes, Sequelize } from "sequelize";

export interface GradeInstance {
    id: number,
    grade3: number,
    grade3Plus: number,
    grade4: number,
    grade4Plus: number,
    grade5: number,
    grade5Plus: number 
}

const Grade = (sequelize: Sequelize) => {
    return sequelize.define("Grade", {
    
    grade3: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    grade3Plus: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    grade4: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    grade4Plus: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    grade5: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    grade5Plus: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
}

export default Grade;
