import express from 'express';
import cors from 'cors';
import UserRoute from '../backend/routes/UserRoutes.js';
import ProductRoutes from '../backend/routes/ProductRoutes.js';
import TransactionRoutes from '../backend/routes/TransactionRoutes.js';


// Definisikan route dan penanganannya di sini
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

// 1. gunakan Product Route disini
app.use(ProductRoutes);

// untuk implementasi route transaksi
app.use(TransactionRoutes);


// Menjalankan server
app.listen(5000, () => console.log("Server berjalan dengan lancar pada http://localhost: 5000"));