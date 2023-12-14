const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const sequelize = require('./database/config');
const initModels = require('./database/models/init-models');

initModels(sequelize);

const cancionesRoutes = require('./routes/cancionesRoutes');
const generosRoutes = require('./routes/generosRoutes');

app.use(bodyParser.json());

app.use('/canciones', cancionesRoutes);
app.use('/generos', generosRoutes);

app.get('/', (req, res) => {
    res.send('Proyecto creado por Analia Boscatto');
});

sequelize.sync().then(() => {
    console.log('Conexión a la base de datos establecida.');
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:3000`);
});
