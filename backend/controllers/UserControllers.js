//import data dari database dengan model
import User from "../models/UserModel.js";

//fungsi untuk mengambil data dari database yang diambil dengan model
export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};
export const addUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(200).json({ msg: "User Created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const destroyUser = async (req, res) => {
    try {
        await User.destroy({
            where: { id: req.params.id },
        }

        );
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

