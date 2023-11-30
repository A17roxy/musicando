const Genero = require('../database/models/generos');
const Cancion = require('../database/models/canciones');


const controller = {
    listarGeneros: async (req, res) => {
        try {
            const generos = await Genero.findAll({
                include: [{
                    model: Cancion,
                    as: 'canciones'
                }]
            });
            res.status(200).json(generos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = controller;