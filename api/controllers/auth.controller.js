import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
       next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const user = new User({ 
        username,
        email,
        password : hashedPassword 
    });
    await user.save();

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      user
    });
  } catch (err) {
    // console.log(err, "Error in signing up");
       next(err);
  }
};
