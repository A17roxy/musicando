const sequelize = require('../config.js');
const { Model, DataTypes } = require('sequelize');


class Cancion extends Model {}

Cancion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'updated_at'
    },
    generoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'genero_id'
    },
    albumId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'album_id'
    },
    artistaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'artista_id'
    }
}, {
    sequelize,
    modelName: 'Cancion',
    tableName: 'canciones'
});



module.exports = Cancion;
