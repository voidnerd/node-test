const express = require("express")
require("dotenv").config();
const routes = require("./routes")

const mongoose = require("mongoose");

const app = express()

const port = process.env.PORT

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}

mongoose.connect(process.env.MONGO_URL, options).then(
    () => { 
        console.log("Database Connected")
     },
    err => { 
        console.log("Unable to Connect to Database")
     }
);

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));


app.use("/api", routes);



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))