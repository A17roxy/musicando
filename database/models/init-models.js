const Artista = require('./artistas');
const Album = require('./albumes');
const Cancion = require('./canciones');
const Genero = require('./generos');


Artista.hasMany(Cancion, { foreignKey: 'artistaId', as: 'canciones' });
Album.hasMany(Cancion, { foreignKey: 'albumId', as: 'canciones' });
Cancion.belongsTo(Artista, { foreignKey: 'artistaId', as: 'artista' });
Cancion.belongsTo(Album, { foreignKey: 'albumId', as: 'album' });
Cancion.belongsTo(Genero, { foreignKey: 'generoId', as: 'genero' });


module.exports = {
    Artista,
    Album,
    Cancion,
    Genero
};
