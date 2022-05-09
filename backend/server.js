import express from 'express'
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import helmet from "helmet";


import { join } from 'path'
const app = express()

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });

app.use('/', express.static(join(process.cwd(), 'public')))

app.use( helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
    }}))

app.use('/api/users', userRouter)

app.use('/api/products', productRouter)

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