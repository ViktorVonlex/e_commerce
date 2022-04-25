import express from 'express'
import data from './data.js';
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const app = express()

mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
});

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.use('/api/users', userRouter)


app.get("/api/sup", (req, res) => {
    res.send("Sup maan")
})

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at hhtp://localhost:${port}`);
});