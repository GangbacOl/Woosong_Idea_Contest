const router = require('express').Router()
const auth = require('./api/auth')

router.use('/auth', auth)

module.exports = router