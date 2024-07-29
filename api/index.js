import dotenv from 'dotenv';

import express from 'express';
import mongoose, { mongo } from 'mongoose';
const app = express();
app.use(express.json());
dotenv.config();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'
import path from 'path';
import cookieParser from 'cookie-parser';
function connectDB() {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb+srv://pn:pnpnpnpn@cluster0.wriuh1a.mongodb.net/mern-project';
        mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB Connected!");
    }
    catch (err) {
        console.log(err.message);
    }
}

connectDB();
app.use(cookieParser());



app.listen("3000", () => {
    console.log("Server is running on port 3000!")
});

const __dirname = path.resolve()

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})