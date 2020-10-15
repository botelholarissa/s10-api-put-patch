const musicas = require('../models/musicas.json');

const albuns = musicas.map(musica => musica.album)

let albunsSemRepetir = []

albuns.forEach(album =>{
    if(!albunsSemRepetir.find(item=>item.id === album.id)){
        albunsSemRepetir.push(album)
    }
})

const atualizaAlbum = (request, response) => {
    const albumBody = request.body; //pegando o body
    const id = parseInt(request.params.id); // pegando o id

    const albumIDs = albunsSemRepetir.map(album => album.id) //criando um array só com os IDs

    const atualizaID = albumIDs.indexOf(id) // pegandoo id que vai ser atualizado

    const albumAtualizadocomID = {id, ...albumBody} //... está pegando todas as chaves que colocamos no body

    albunsSemRepetir.splice(atualizaID, 1, albumAtualizadocomID) // atualizando o album

    response.status(200).send(albunsSemRepetir.find(album=>album.id===id))
}

const updateAlbum = (request, response) => {
    const albumBody = request.body;
    const id = parseInt(request.params.id);

    const albumAtualizado = albunsSemRepetir.find(album => album.id == id)

    for(key in albumBody) {
        albumAtualizado[key] = albumBody[key]
    }

    response.status(200).send(albumAtualizado)

}

module.exports = {
    atualizaAlbum,
    updateAlbum
}