//Database.js

//import yang dibutuhkan
import { Sequelize } from "sequelize";

//masukan semua identitas database ke wadah yang bernama db
const db = new Sequelize("pos_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

//tampilkan data db
export default db;