const cloudinary = require("cloudinary"); //importing cloudinary
const router = require("express").Router(); //creating a router
require("dotenv").config(); //importing dotenv files so we can use the environment variables

//using config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.delete("/:public_id", async (req, res) => {
  const { public_id } = req.params;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send();
  } catch (error) {
      res.status(400).send(error.message);
  }
});

module.exports = router;