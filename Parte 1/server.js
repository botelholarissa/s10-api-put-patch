const app = require('./src/app')

const PORT = 5000

app.listen(PORT, () => {
    console.log(`O server está rodando na porta ${PORT}`)
})