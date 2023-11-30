const Cancion = require('../database/models/canciones');


const controller = {
    listarCanciones: async (req, res) => {
        try {
            const canciones = await Cancion.findAll();
            res.status(200).json(canciones);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    crearCancion: async (req, res) => {
        try {

            const { titulo, duracion, generoId, albumId, artistaId } = req.body;
    
            const nuevaCancion = await Cancion.create({
                titulo,
                duracion,
                generoId,
                albumId,
                artistaId
            });
    
            res.status(201).json(nuevaCancion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    obtenerCancion: async (req, res) => {
        try {
            const id = req.params.id;
            const cancion = await Cancion.findByPk(id);

            if (cancion) {
                res.status(200).json(cancion);
            } else {
                res.status(404).json({ error: 'Canción no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    editarCancion: async (req, res) => {
        try {
            const id = req.params.id; 
            const datosActualizados = req.body;
    
            const [updateSuccess] = await Cancion.update(datosActualizados, {
                where: { id: id }
            });
    
            if (updateSuccess>0) {
                res.status(200).json({ message: 'Canción actualizada con éxito' });
            } else {
                res.status(404).json({ error: 'Canción no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    eliminarCancion: async (req, res) => {
        try {
            const id = req.params.id;
    
            const cancionEliminada = await Cancion.destroy({
                where: { id: id }
            });
    
            if (cancionEliminada) {
                res.status(200).json({ message: 'Canción eliminada con éxito' });
            } else {
                res.status(404).json({ error: 'Canción no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = controller;
