// import kebutuhan
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

//definisikan tipe data
const { DataTypes } = Sequelize;

// definisikan tabel dan data apa yang mau diambil
const User = db.define(
    "users",
    {
        user_name: DataTypes.STRING,
        user_nohp: DataTypes.STRING,
        user_password: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);

// tampilkan datanya
export default User;

// kalau tidak ada data, maka buatkan data yang sudah ditentukan
(async () => {
    await db.sync();
})();
