const express = require("express");
const router = express.Router();
const inicioController = require("../controllers/inicioController");

router.post("/inicio", inicioController.createUser);
router.get("/inicios", inicioController.getUsers);
router.get("/inicio", inicioController.getUser);
router.put("/inicio", inicioController.updateUser);
router.delete("/inicio", inicioController.deleteUser);

module.exports = router;
