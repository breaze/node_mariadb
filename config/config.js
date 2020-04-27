const mariadb = require('mariadb');
const SERVER_PORT = process.env.PORT || 3800;
const SERVER_URL = 'localhost';
const DB_PORT =  '3306';
const DB_URL = 'localhost';
const DB_USER =  'root';
const DB_PASS = '';
const DB_NAME = 'proyecto_so';
const pool = mariadb.createPool({
    host: DB_URL, 
    user: DB_USER, 
    password: DB_PASS,
    database: DB_NAME,
    port: DB_PORT
});

const DB = pool.getConnection();
module.exports = {
    SERVER_PORT: process.env.PORT || 3800,
    SERVER_URL: 'localhost',
    pool
}