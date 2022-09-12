const express = require("express");
const { userSignUp, userLogin } = require("../controllers/userController.js");
const {
  getProducts,
  getProductById,
} = require("../controllers/productController.js");
const addPaymentGateway = require("../controllers/payment_controller.js");
const router = express.Router();

router.post("/signup", userSignUp);

router.post("/login", userLogin);
router.get("/products", getProducts);

router.get("/product/:id", getProductById);
router.post("/payment", addPaymentGateway);

module.exports = router;
