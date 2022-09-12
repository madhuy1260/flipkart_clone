const mongoose = require("mongoose");

const Connection = async () => {
  const password = "oIcKoTGPCVbJu7Kc";
  const dburl = `mongodb+srv://madhu:${password}@cluster0.8caqjot.mongodb.net/flipkart_products?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(dburl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to DB Successfully");
  } catch (err) {
    console.log("Error : ", err.message);
  }
};

module.exports = Connection;
