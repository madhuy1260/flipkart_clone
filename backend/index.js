const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const Connection = require("./db");
const DefaultData = require("./defaultData.js");
const Routes = require("./routes/route.js");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port number : ${PORT}`);
});

Connection();
DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

// let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
// let paytmParams = {};

// paytmParams["MID"] = process.env.PAYTM_MID;
// paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
// paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
// paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
// paytmParams["ORDER_ID"] = uuid();
// paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
// paytmParams["TXN_AMOUNT"] = "100";
// paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback";
// paytmParams["EMAIL"] = "y.madhu1260@gmail.com";
// paytmParams["MOBILE_NO"] = "1234567890";

// exports.paytmMerchantKey = paytmMerchantKey;
// module.exports = { paytmParams };
