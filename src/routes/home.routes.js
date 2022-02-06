const express = require("express");
const router = express.Router();
router.get("/", function (request, response) {
   console.log('home.routes/get/')
   response.render("home", { errors: [] });
});
module.exports = router;