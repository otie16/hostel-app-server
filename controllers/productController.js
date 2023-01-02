// const { Product } = require("../models/Product");
// // const { auth, isUser, isAdmin } = require("../middleware/auth");
// // const cloudinary = require("../utils/cloudinary");
// const multer = require("multer");
// const path = require("path");

// const router = require("express").Router();

// //CREATE
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "Images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const imageUpload = multer({
//   storage: storage,
//   limits: { fileSize: "5000000" },
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|gif/;
//     const mimeType = fileTypes.test(file.mimetype);
//     const extname = fileTypes.test(path.extname(file.originalname));

//     if (mimeType && extname) {
//       return cb(null, true);
//     }
//     cb("Give proper files format for upload");
//   },
// }).single("image");
// router.post("/", async (req, res) => {
//   const { name, location, description, price, image } = req.body;

//   //Uploading image using multer
//   try {
//     const product = await Product.create({
//       name: name,
//       location: location,
//       description: description,
//       price: price,
//       image: image,
//     });

//     const savedProduct = await product.save();
//     res.status(200).send(savedProduct);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).send(products);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// //DELETE

// // router.delete("/:id", async (req, res) => {
// //   try {
// //     await Product.findByIdAndDelete(req.params.id);
// //     res.status(200).send("Product has been deleted...");
// //   } catch (error) {
// //     res.status(500).send(error);
// //   }
// // });

// //GET ALL PRODUCTS

// // router.get("/", async (req, res) => {
// //   const qbrand = req.query.brand;
// //   try {
// //     let products;

// //     if (qbrand) {
// //       products = await Product.find({
// //         brand: qbrand,
// //       });
// //     } else {
// //       products = await Product.find();
// //     }

// //     res.status(200).send(products);
// //   } catch (error) {
// //     res.status(500).send(error);
// //   }
// // });

// // //GET PRODUCT

// // router.get("/find/:id", async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);
// //     res.status(200).send(product);
// //   } catch (error) {
// //     res.status(500).send(error);
// //   }
// // });

// // //UPDATE

// // router.put("/:id", isAdmin, async (req, res) => {
// //   try {
// //     const updatedProduct = await Product.findByIdAndUpdate(
// //       req.params.id,
// //       {
// //         $set: req.body,
// //       },
// //       { new: true }
// //     );
// //     res.status(200).send(updatedProduct);
// //   } catch (error) {
// //     res.status(500).send(error);
// //   }
// // });

// module.exports = {addProduct, upload}
