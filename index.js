const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserModelRouter = require("./src/routes/auth");
const PaystackRouter = require("./src/routes/paystack");
const dotenv = require("dotenv");
const cors = require("cors");
const fileupload = require("express-fileupload");
const cookieParser = require('cookie-parser');
const path = require('path');


dotenv.config();



const app = express();

// cookie-parser
app.use(cookieParser());



// body-parser
app.use(bodyParser.json());

const corsOptions = {
    origin: process.env.FRONTEND_LINK,
    credentials: true,
};

app.set('trust proxy', 1);
app.use(cors(corsOptions))



// express fileupload
app.use(
    fileupload({
        useTempFiles: true,
    })
);

mongoose.connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Database Connected Successfully!");
});


app.set("view engine", "ejs");
app.use("/api/v1/auth", UserModelRouter);
app.use("/paystack", PaystackRouter);

//set static files
app.use(express.static("ui/_static"));
//provide a wildcard as a fallback for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, `ui/_static${req.url}.html`));
});

app.listen(process.env.NODE_ENV === "production"? process.env.PORT: 5000);


module.exports = app
