const express = require('express');
const router = express.Router();
const productosController=require('../controller/productos.controller');

router.get('/', (req, res) => res.redirect('/productos'));
router.get('/productos', productosController.listarProductos);
module.exports = router;