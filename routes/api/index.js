const router = require("express").Router();
const bookRoutes = require("./articles");


router.use("/article", articleRoutes);

module.exports = router;