import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";
import {MongoClient, ServerApiVersion, ObjectId} from "mongodb";

const productRouter = express.Router();

//cloud
//const uri = "mongodb+srv://Vonlex:Darkside521@cluster0.xegqa.mongodb.net/ecommerce?retryWrites=true&w=majority";

//localhost or container
const uri = "mongodb://docker:mongopw@localhost:49153";

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

productRouter.get('/', expressAsyncHandler(async (req, res) => {
        await client.connect();
        const collection = client.db("ecommerce").collection("products");
        const products = await collection.find({},).toArray();
        await client.close();
        res.send({products});
    })
)

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
    console.log(createdProducts);
}))

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    await client.connect();
    const collection = client.db("ecommerce").collection("products");
    const product = await collection.findOne({"_id": ObjectId(req.params.id)});
    await client.connect();

    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Product not found'});
    }
}))

export default productRouter;

