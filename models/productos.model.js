const productos= [
    { id : 1, nombre: 'laptop', precio: 3500},
    { id : 2, nombre: 'teclado', precio: 250},
    { id : 3, nombre: 'mouse', precio: 90},
    { id : 4, nombre: 'monitor', precio: 1500},
];
function obtenerProductos() {
    return productos;
}
module.exports={
    obtenerProductos
}
