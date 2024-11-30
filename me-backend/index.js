import express from "express";
import { marked } from "marked";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

// console.log('Hello',process.env.PORT);
const app = express()
app.use(cors())
app.use(express.json());
app.post("/convert", (req, res) => {
    const { markdown } = req.body
    console.log('request body', markdown)
    if(!markdown) {
        return res.status(400).json({ error : "No text found. Markdown Text is required."})
    }
    const html = marked(markdown)
    res.json({html: html});
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})


