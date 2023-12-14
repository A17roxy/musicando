const Artista = require('./artistas');
const Album = require('./albumes');
const Cancion = require('./canciones');
const Genero = require('./generos');

function initModels (sequelize) {
    Artista.hasMany(Cancion, { foreignKey: 'artistaId', as: 'canciones' });
    Album.hasMany(Cancion, { foreignKey: 'albumId', as: 'canciones' });
    Cancion.belongsTo(Artista, { foreignKey: 'artistaId', as: 'artista' });
    Cancion.belongsTo(Album, { foreignKey: 'albumId', as: 'album' });
    Cancion.belongsTo(Genero, { foreignKey: 'generoId', as: 'genero' });
    Genero.hasMany(Cancion, { foreignKey: 'generoId', as: 'canciones' });
    console.log("Modelos Inicializados");

    return {
        Artista,
        Album,
        Cancion,
        Genero
    };
}


module.exports = initModels;

