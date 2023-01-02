const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const products = require("./products");
const bodyParser = require("body-parser");
const login = require("./routes/login.js");
const stripe = require("./routes/stripe.js");
const imagesRoute = require("./routes/images");
const register = require("./routes/register.js");
const productsRoute = require("./routes/products");

require("dotenv").config();  

const app = express();

app.use(express.json());
app.use(cors()); 
app.use(express.json({ limit: "50mb" })); 
app.use(express.urlencoded({extended:true, limit: "50mb" }));

app.use("/api/login", login);
app.use("/api/stripe", stripe);
app.use("/api/register", register);
app.use("/api/images", imagesRoute);
app.use("/api/products", productsRoute); 

// app.use('/Images', express.static('./Images'))

// app.get("/", (req, res) => {
//   res.send("Welcome to our online shop API...");
// }); 

// app.get("/products", (req, res) => {
//   res.send(products);
// });

// app.get("/products/:id", (req, res) => {
//   const product =  products.find({id: req.params.id});
//   res.send(product);
// });

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    // limit: '50mb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => { 
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log("Connection to db failed", err.message);
  });

app.listen(port, () => {
  console.log(`served at ://localhost:${port}`);
});
