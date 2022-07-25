const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
//@route   POST api/users
//@desc    Register user
//@access  public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include valid Email").isEmail(),
    check("password", "Please enter password with min 6 characters").isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    res.send("Users route");
  }
);

module.exports = router;
