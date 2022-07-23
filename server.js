const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DataBase
connectDB();

//single end point to test it out ( basic express set-up-test)
app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));