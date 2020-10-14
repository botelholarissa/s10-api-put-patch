const musicasController = require('../../../Parte 1/src/controllers/musicasController');
const games = require('../models/games.json')


const updateName = (request, response) => {
    const gameUpdated = request.body;
    const id = parseInt(request.params.id);

    const gameIDs = games.map(game => game.id);
    const updateID = gameIDs.indexOf(id);

    const gamesUpdateWhitID = {id, ...gameUpdated};
    games.splice(updateID, 1, gamesUpdateWhitID);

    response.status(200).send(games.find(game => game.id == id))
}



module.exports = {
    updateName
}