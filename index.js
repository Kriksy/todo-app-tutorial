const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

// connection to db
// mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to db");
    // console.log(mongoose.connection.readyState) // connection status 0 or 1

    app.listen(3000, () => console.log("Server Up and running on 3000"));
})

// view engine configuration
app.set("view engine", "ejs");

// GET METHOD
app.get('/', (req, res) => {
    res.render('todo.ejs');
});

// POST METHOD
app.post('/', (req, res) => {
    console.log(req.body);
});
