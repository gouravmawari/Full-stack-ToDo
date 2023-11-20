import express, { Request, Response } from "express";
import cors from 'cors';
import mongoose, { connect } from "mongoose";
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const product_routes = require("./routes/product.ts")
app.use("/api",product_routes)


const dbURI = "mongodb+srv://guddu:guddu@cluster1.ved7bni.mongodb.net/yes?retryWrites=true&w=majority";
mongoose.connect(dbURI,)
    .then((result) => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log("server is created")
        })
    })
    .catch((err) => console.log(err))  