const musicas = require('../models/musicas.json')

const update = (request, response)=>{
    const musicaAtualizada = request.body
    const id = parseInt(request.params.id)

    const musicasIDs = musicas.map(musica => musica.id)
    const atualizaId = musicasIDs.indexOf(id)

    const musicasAtualizadascomID = { id, ...musicaAtualizada}
    musicas.splice(atualizaId, 1, musicasAtualizadascomID)
    
    response.status(200).send(musicas.find(musica => musica.id == id))
    console.log(musicas)
}

const updatePatch = (request, response)=>{
    const musicaAtualização = request.body
    const id = parseInt(request.params.id)
    const musicaParaAtualizar = musicas.find(item => item.id == id)

    Object.keys(musicaAtualização).forEach((key)=>{
        musicaParaAtualizar[key] = musicaAtualização[key]
    })

    response.status(200).send(musicas)

}




module.exports = {
    update,
    updatePatch
}















/* logica de abstracao PUT 
//percorrer a array
//devolver novo array somente com ids
//descobrir o index desses ids
//alterar em musicas o item desejado

const musicas = [
    {id: 1,
    nome: "musica1"},
    {id:2,
    nome: "musica2"},
    {id:3,
    nome: "musica3"}]

const musicasIDs = musicas.map(musica =>{
    return musica.id
})

const atualizaId = musicasIDs.indexOf(2)

musicas.splice(atualizaId, 1, {id:2, nome: "musica alterada"})
console.log(musicas)
 */


 /* const updatePatch = (request, response)=>{
    const musicaBody = request.body
    const id = parseInt(request.params.id)
    const catchMusica = musicas.find(item => item.id == id)

    const alteraMusica = musicas.map(item=>{
        return musicas.name.replace(catchMusica, musicaBody)
    })

    response.status(200).send(alteraMusica)
} */