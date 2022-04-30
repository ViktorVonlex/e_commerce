import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";
import {MongoClient, ServerApiVersion, ObjectId} from "mongodb";

const productRouter = express.Router();

const uri = "mongodb+srv://Vonlex:Darkside521@cluster0.xegqa.mongodb.net/ecommerce?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

client.connect();
const collection = client.db("ecommerce").collection("products");

productRouter.get('/', expressAsyncHandler(async (req, res) => {
        const products = await collection.find({},).toArray();
        res.send({products});
    })
)

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
    console.log(createdProducts);
}))

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await collection.findOne({"_id": ObjectId(req.params.id)});

    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Product not found'});
    }
}))

export default productRouter;

