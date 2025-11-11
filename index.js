import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get ("/", (req, res) => {
    res.send("hello world");
});

app.get ("/twitter", (req, res) => {
    res.send("sakshamtwitter.com");
});

app.get ("/login", (req, res) => {
    res.send("<h1>login page</h1>");
})

app.get ("/youtube", (req, res) => {
    res.send("<h2>sakshamyoutube.com</h2>");
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});