import Sequelize from "sequelize";
const sequelize = new Sequelize(
    process.env.DB,
    process.env.USERNAME,
    process.env.PASSWORD,
    {
        dialect: process.env.DIALECT,
        host: process.env.HOST
    }
)
export default sequelize;