const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const videoRoutes = require('./routes/video.routes');

const app = express();
const connect = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI, {
            useNewUrlParser: "true",
            useUnifiedTopology: "true"
        },
            console.log("databsae connected successfully"));
    } catch (error) {
        console.log(error.message);
    }
};
//MIDDLEWARES
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/video', videoRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || "internal server error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

const port = process.env.PORT;
app.listen(port, () => {
    connect();
    console.log(`the server is running on port ${port}`);
});
