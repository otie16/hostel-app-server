const router = require("express").Router;
const User = require("../models/user");

const router = express.Router();
//User Validation
router.post("/", async (req, res, next) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.create({ name, email, password, role });
    res.json(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
