const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // trim: true,
      // maxlength: 32,
    },

    location: {
      type: String,
      required: true,
    },
    // enum: ["ekosodin", "bdpa", "osasogie", ], },

    description: { type: String, required: true },

    price: {
      type: Number,
      required: true,
      // trim: true,
      // maxlength: 32,
      // required: [true, "Product must have a price"],
    },
    noOfRooms: {
      type: Number,
      required: true,
    },

    pictures: {
      type: Array,
      required: true,
    },
  },

  { timestamps: true }
  // { minimize: false }
);

module.exports.Product = mongoose.model("Product", productSchema);
module.exports.productSchema = productSchema;;
