const express = require("express");
const router = express.Router();

const authorize = require("../middlewares/authorization");

const index_controller = require("../controllers/indexController");

/* GET home page. */
router.get("/", authorize(), index_controller.index);

module.exports = router;
