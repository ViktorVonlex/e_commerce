import express from 'express'
import data from './data.js';

const app = express()

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.get("/api/sup", (req, res) => {
    res.send("Sup maan")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at hhtp://localhost:${port}`);
});