const express = require("express");
const { verifyToken } = require("../middleware/verifyToken.js");
const { order, myOrders } = require("../controllers/order.controller.js");
const { Register, Login } = require("../controllers/user.controller.js");
const { getAllBuses, getBusByBusId } = require("../controllers/bus.controller.js");

const router = express.Router();

router.post("/register", Register)
router.post("/login", Login)
router.get("/buses", verifyToken, getAllBuses);
router.get("/buses/:busId", verifyToken, getBusByBusId);
router.post("/order", verifyToken, order);
router.get("/my-order", verifyToken, myOrders);

module.exports = router;


