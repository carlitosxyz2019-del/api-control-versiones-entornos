const express = require('express');
const path = require('path');
const app = express();
const productosRoutes = require('./routes/producto.routes');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', productosRoutes);
app.listen(3000, () => {
    console.log('SERVIDOR CORRIENDO EN http://localhost:3000');
});