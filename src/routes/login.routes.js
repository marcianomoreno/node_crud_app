const express = require("express");
const router = express.Router();
router.get("/", function (request, response) {
   console.log('login.routes/get/')
   response.render("login", { errors: [] });
});
module.exports = router;