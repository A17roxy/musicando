const express = require('express');
const router = express.Router();
const cancionesController = require('../controllers/cancionesController');

router.get('/', cancionesController.listarCanciones);
router.post('/create', cancionesController.crearCancion);
router.get('/:id', cancionesController.obtenerCancion);
router.put('/update/:id', cancionesController.editarCancion);
router.delete('/delete/:id', cancionesController.eliminarCancion);

module.exports = router;
