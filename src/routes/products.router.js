const {Router} = require("express");
const { createProduct } = require("../controllers/products.controllers");
const authenticate = require("../middlewares/authetication.middleware");

const router = Router();

router.post("/products",authenticate, createProduct);

module.exports = router;