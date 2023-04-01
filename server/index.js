const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const authRoutes = require('./routes/auth.routes');


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
app.use(express.json());
app.use('/api/auth', authRoutes);

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

