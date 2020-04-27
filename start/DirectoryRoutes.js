// Cargamos el módulo de express para poder crear rutas
const express = require('express');
// Cargamos el controlador
const DirectoryController = require('../app/controllers/DirectoryController');
const directories = new DirectoryController;
// Llamamos al router
const api = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.post('/directory/create_directory', directories.createDirectory);
api.get('/directory/get_directories', directories.getDirectoriesById);
api.get('/directory/get_all', directories.getAllDirectories);
// Exportamos la configuración
module.exports = api;