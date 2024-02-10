import User from '../models/user.model.js';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password || username === "" || email === "" || password === "") {
            res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const user = new User({ username, email, password });
        await user.save();

        res.status(200).json({
            success: true,
            message: "User created successfully!"
        })

    } catch (err) {
        console.log(err, "Error in signing up");
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}