
const express = require('express');
const inicioController = require('../controllers/inicoController');
const router = express.Router();

router.post('/inicio', inicioController.createUser);
router.get('/inicio', inicioController.getUsers);
router.get('/inicio', inicioController.getUser);
router.put('/inicio', inicioController.updateUser);
router.delete('/inicio', inicioController.deleteUser);

module.exports = router;