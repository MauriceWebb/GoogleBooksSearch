const router = require("express").Router();
const bookRoutes = require("./books");

// Herb routes
router.use("/books", bookRoutes);

module.exports = router;
