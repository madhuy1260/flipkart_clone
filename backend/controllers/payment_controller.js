const paytmchecksum = require("../paytm/PaytmChecksum.js");
const { v4: uuid } = require("uuid");

// const main = require("../index.js");
// const { paytmParams } = require("../index.js");

// let paytmParams = main.paytmParams;

let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
let paytmParams = {};

paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback";
paytmParams["EMAIL"] = "y.madhu1260@gmail.com";
paytmParams["MOBILE_NO"] = "1234567890";

const addPaymentGateway = async (req, res) => {
  try {
    let paytmChecksum = await paytmchecksum.generateSignature(
      paytmParams,
      paytmMerchantKey
    );
    let params = { ...paytmParams, CHECKSUMHASH: paytmChecksum };

    res.status(200).json(params);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = addPaymentGateway;
