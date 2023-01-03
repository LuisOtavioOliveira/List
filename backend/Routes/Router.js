const router = require('express').Router()

const personRouter = require('./persons')

router.use('/', personRouter)

module.exports = router