import { Sequelize } from "sequelize";
import { createNamespace } from "cls-hooked";

const cls = createNamespace("namespace");
Sequelize.useCLS(cls);

const db: any = {};

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;