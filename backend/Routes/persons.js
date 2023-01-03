const router = require('express').Router()

const personController = require('../controllers/personsController')

router.route('/persons').post((req,res) => personController.create(req,res))

router.route('/persons').get((req,res) => personController.getAll(req,res))

router.route('/persons/:id').get((req,res) => personController.get(req,res))

router.route('/persons/:id').delete((req,res) => personController.delete(req,res))

router.route('/persons/:id').patch((req,res) => personController.update(req,res))

module.exports = router;