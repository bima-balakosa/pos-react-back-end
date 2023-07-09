import express from 'express';
import cors from 'cors';
import UserRoute from '../backend/routes/UserRoutes.js';

// Definisikan route dan penanganannya di sini
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

// Menjalankan server
app.listen(5000, () => console.log("Server berjalan dengan lancar pada http://localhost: 5000"));