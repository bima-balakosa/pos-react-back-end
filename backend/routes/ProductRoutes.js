//import kebutuhan
import express from "express";

//2. masukan controller untuk mendapatkan mengelola Product
import { getProducts } from "../controllers/ProductControllers.js";
import { createProduct } from "../controllers/ProductControllers.js";


//definisikan router
const router = express.Router();

// 1. buat rute untuk mengarahkan ke fungsi getProducts padacontroller
router.get("/product", getProducts);

router.post("/product/send", createProduct)

//tampilkan data yang diproses
export default router;