// import kebutuhan
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

//definisikan tipe data
const { DataTypes } = Sequelize;

// definisikan tabel dan data apa yang mau diambil
const Transaction = db.define(
    "transactions",
    {
        product_name: DataTypes.STRING,
        product_price: DataTypes.STRING,
        product_qty: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);

// tampilkan datanya
export default Transaction;

// kalau tidak ada data, maka buatkan data yang sudah ditentukan
(async () => {
    await db.sync();
})();
