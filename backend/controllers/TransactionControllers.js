//import data dari database dengan model
import Transaction from "../models/TransactionModel.js";

//fungsi untuk mengambil data dari database yang diambil dengan model
// 1. Buat fungsi getProduct untuk mengambil data di database
export const getTransactions = async (req, res) => {

    try {
        // 2. tambahkan fungsi "temukan semua" untuk membaca semua data yang ada di DB
        const response = await Transaction.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createTransaction = async (req, res) => {
    try {
        await Transaction.create(req.body);
        res.status(200).json({ msg: "Transaction Ditambahkan" });
    } catch (error) {
        console.log(error.message);
    }
};