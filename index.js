const app = require('./config/app');
const config = require('./config/config');

app.listen(config.SERVER_PORT, () => {
    console.log(`servidor corriendo en http://${config.SERVER_URL}:${config.SERVER_PORT}`);
});