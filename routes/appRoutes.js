const express = require("express");
const router = express.Router();
const { AuthAccess } = require("../middlewares/availablity");
const { getPage } = require("../controllers/pageControllers");

router.get("/HomePage",  AuthAccess,getPage);

router.get("/OurServices",  AuthAccess, getPage);

router.get("/Contactus", AuthAccess,getPage);


module.exports = router;
