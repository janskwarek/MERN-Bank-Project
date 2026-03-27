import { db } from "../db/dbConn.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const loginController = async (req,res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const normalizedEmail = String(email).trim().toLowerCase();
        const userInfo = await db.collection("user_info").findOne({ email: normalizedEmail });

        const invalidMsg = { message: "Invalid email or password" };
        if (!userInfo) {
            return res.status(401).json(invalidMsg);
        }

        const passwordMatch = await bcrypt.compare(password, userInfo.password);
        if (!passwordMatch) {
            return res.status(401).json(invalidMsg);
        }

        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not set");
            return res.status(500).json({ message: "Server configuration error" });
        }

        const payload = { userId: String(userInfo._id) };
        const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).cookie({
            httponly:true,
            sameSite: "strict",
            maxAge: 3600000, // 1 hour
        }).json({ token: jwtToken, message: "Login successful"});
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};