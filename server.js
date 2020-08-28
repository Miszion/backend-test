const dotenv = require('dotenv');
dotenv.config()
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to a sample backend by Mission Marcus"})
});

require('./app/routes/food.routes.js')(app)

app.listen(3001, () => {
    console.log("Server is running on port 3001")
    console.log(process.env.HOST)
});