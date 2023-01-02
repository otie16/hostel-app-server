const router = require("express").Router();
const { Product } = require("../models/product");
const User = require("../models/user");

//Get all Products

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//Create Products
router.post("/", async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      location,
      images: pictures,
      noOfRooms,
    } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      location,
      pictures,
      noOfRooms,
    });

    const products = await Product.find();
    res.status(201).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//Get a Product
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const product = await Product.findById(id);
    const similar = await Product.find({ location: product.location }).limit(5);
    res.status(200).json({product, similar});
  } catch (err) {
    res.status(500).send(err.message);
  }
});
 
module.exports = router;
