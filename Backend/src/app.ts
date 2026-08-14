import express from "express";
import cors from "cors";
import { products } from "../src/config/db/db";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend athlora nyala")
})

app.get("/products", (req, res) => {
    res.json(products)
});

export default app;