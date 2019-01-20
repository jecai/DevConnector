const express = require("express");
const router = express.Router();

// @route GET api/profiles/test
// @description Tests posts route
// @access Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Posts API works"
  })
);

module.exports = router;
