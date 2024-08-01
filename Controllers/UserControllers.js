// Corrected file name to match the conventional naming and fixed import paths
const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    } catch (err) {
        console.error(err); // Changed to console.error for logging errors
        return res.status(500).json({ message: "Internal server error" });
    }

    if (!users || users.length === 0) {
        return res.status(404).json({ message: "Users not found" });
    }

    // Display all users
    return res.status(200).json({ users });
}

exports.getAllUsers = getAllUsers;
