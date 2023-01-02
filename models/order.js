const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    customerId: { type: String},
    paymentIntentId: { type: String},
    products: [
      {
        id: { type: String },
        name: { type: String },
        slug: { type: String },
        category: { type: String },
        image: { type: String },
        price: { type: String },
        no_of_rooms: { type: Number },
        rating: { type: String },
        numReviews: { type: String },
        description: { type: String },
        cartQuantity: { type: Number },
      },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    payment_status: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports.Order = mongoose.model("Order", orderSchema);
module.exports.orderSchema = orderSchema;
