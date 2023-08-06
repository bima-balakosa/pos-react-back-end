//import kebutuhan
import express from "express";

//2. masukan controller untuk mendapatkan mengelola Product
import { createTransaction, getTransactions } from "../controllers/TransactionControllers.js";

//definisikan router
const router = express.Router();

// 1. buat rute untuk mengarahkan ke fungsi getProducts padacontroller
router.get("/transaction", getTransactions);

router.post("/transaction/send", createTransaction)


//tampilkan data yang diproses
export default router;