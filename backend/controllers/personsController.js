const PersonModel = require('../models/Persons')

const personController = {
    create: async (req,res) => {
        try {
            
            const person = {
                name: req.body.name,
                operations: req.body.operations
            }

            const response = await PersonModel.create(person)

            res.status(201).json({response, msg:"Pessoa adicionada com sucesso."})

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {

        try {

            const persons = await PersonModel.find()

            res.json(persons)
            
        } catch (error) {
            console.log(error)
        }

    },
    get: async (req,res) => {
        try {
             
            const id = req.params.id
            const person = await PersonModel.findById(id)

            res.json(person)


        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req,res) => {
        try {
            const id = req.params.id
            const deletedPerson = await PersonModel.findByIdAndDelete(id)

            res.json(deletedPerson)

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req,res) => {
        try {
            const id = req.params.id

            const person = {
                name: req.body.name,
                operations: req.body.operations
            }

            const updatedPerson = await PersonModel.findByIdAndUpdate(id, person)

            res.json(updatedPerson)

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = personController