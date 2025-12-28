const express = require("express");
const router = express.Router();
const { saveInterests } = require("../controllers/userController");

router.put("/interests", saveInterests);

module.exports = router;
