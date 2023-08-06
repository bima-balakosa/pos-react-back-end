//import data dari database dengan model
import Product from "../models/ProductModel.js";

//fungsi untuk mengambil data dari database yang diambil dengan model
// 1. Buat fungsi getProduct untuk mengambil data di database
export const getProducts = async (req, res) => {

    try {
        // 2. tambahkan fungsi "temukan semua" untuk membaca semua data yang ada di DB
        const response = await Product.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

// 1. Buat logika untuk menambahkan data
export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.status(200).json({ msg: "Produk Ditambahkan" });
    } catch (error) {
        console.log(error.message);
    }
};