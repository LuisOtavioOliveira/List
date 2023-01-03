const mongoose = require('mongoose')

async function main( ) {

try {

    mongoose.set('strictQuery', true)

await mongoose.connect('mongodb+srv://Luisotavio:9EHSL7PnQGZNif1a@cluster0.h89ejen.mongodb.net/?retryWrites=true&w=majority')

console.log("Conectado ao banco")

} catch {
    console.log(`Erro: ${error}`)
}

}

module.exports = main;