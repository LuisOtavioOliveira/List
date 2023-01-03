const mongoose = require('mongoose')

const { Schema } = mongoose;


const personSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    operations: [{
        type: {
           "name": String,
           "price": Number,
        }
    }]
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person; 
