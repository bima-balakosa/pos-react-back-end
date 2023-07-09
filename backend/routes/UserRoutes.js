//import kebutuhan
import express from 'express';

//masukan controller untuk mendapatkan data user
import {
    getUsers, addUser, destroyUser, getUserById, updateUser
} from "../controllers/UserControllers.js";

//definisikan router
const router = express.Router();

router.get("/users", getUsers);
router.get("/user/edit/:id", getUserById);
router.patch("/user/update/:id", updateUser);
router.post("/user/add", addUser);
router.delete("/delete/users/:id", destroyUser);



//tampilkan data yang diproses
export default router;