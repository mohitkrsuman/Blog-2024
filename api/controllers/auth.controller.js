import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
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
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
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
    res.status(500).json({
      success: false,
      message: "Error in signing up",
      err
    });
  }
};
