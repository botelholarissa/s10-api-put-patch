const musicasController = require('../../../Parte 1/src/controllers/musicasController');
const games = require('../models/games.json')


const updatePUT = (request, response) => {
    const gameUpdated = request.body;
    const id = parseInt(request.params.id);

    const gameIDs = games.map(game => game.id);
    const updateID = gameIDs.indexOf(id);

    const gamesUpdateWhitID = {id, ...gameUpdated};
    games.splice(updateID, 1, gamesUpdateWhitID);

    response.status(200).send(games.find(game => game.id == id))
}

const updatePATCH = (request, response) => {
    const gameBody = request.body
    const id = parseInt(request.params.id)
    const gameFind = games.find(item => item.id == id)

    for(key in gameBody){
        gameFind[key] = gameBody[key]
    }
    
    response.status(200).send(games)
}

module.exports = {
    updatePUT,
    updatePATCH
}