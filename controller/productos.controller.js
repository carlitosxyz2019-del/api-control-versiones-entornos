const productosModel = require('../models/productos.model');
function listarProductos(req, res) {
    const productos = productosModel.obtenerProductos();
    res.render('productos',{productos});
}
module.exports = {
    listarProductos
};