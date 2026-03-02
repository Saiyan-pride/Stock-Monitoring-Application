const { signup, login, logout } = require("../controller/AuthController");
const { userVerification } = require("../middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/", userVerification);

module.exports = router;
