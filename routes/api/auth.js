const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
//@route   GET api/auth
//@desc    Test route
//@access  public

//adding middleware made this route protected
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
