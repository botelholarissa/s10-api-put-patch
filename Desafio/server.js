const app = require('./src/app')
const PORT = 5050

app.listen(PORT, () => {
    console.log(`O desafio está rodando na porta ${PORT}`)
})