const products = require("./constants/products.js");
const Product = require("./models/productSchema.js");

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data Inserted again Successfully");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = DefaultData;
