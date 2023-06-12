const {Router} = require("express");
const {createUser, getAllUsers, deleteUser, userLogin} = require("../controllers/users.controllers");
const { createUserValidator, loginUserValidator } = require("../validators/user.validator");

const router = Router();

router.post("/users",createUserValidator, createUser);
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.post("/users/login",loginUserValidator, userLogin);

module.exports = router;