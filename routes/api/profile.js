const express = require("express");
const router = express.Router();

// @route GET api/profiles/test
// @description Tests profiles route
// @access Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Profile API works"
  })
);

module.exports = router;
