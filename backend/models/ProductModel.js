// import kebutuhan
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

//definisikan tipe data
const { DataTypes } = Sequelize;

// definisikan tabel dan data apa yang mau diambil
const Product = db.define(
    "products",
    {
        product_name: DataTypes.STRING,
        product_price: DataTypes.STRING,
        product_stok: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);

// tampilkan datanya
export default Product;

// kalau tidak ada data, maka buatkan data yang sudah ditentukan
(async () => {
    await db.sync();
})();
