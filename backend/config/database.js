import {Sequelize} from "sequelize";

const db = new Sequelize('kartutani', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;