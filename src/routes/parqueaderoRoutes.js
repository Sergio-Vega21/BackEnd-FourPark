const express = require('express');
const router = express.Router();
const parqueaderoController = require('../controllers/parqueaderoController');

router.post('/parqueaderos', parqueaderoController.createParqueadero);
router.get('/parqueaderos', parqueaderoController.getParqueaderos);
router.get('/parqueadero', parqueaderoController.getParqueadero);
router.put('/parqueaderos', parqueaderoController.updateParqueadero);
router.delete('/parqueaderos', parqueaderoController.deleteParqueadero);

module.exports = router;
