const router = require('express').Router()
const auth = require('./api/auth')
const mail = require('./api/mail')
router.use('/auth', auth)
router.use('/mail', mail)

module.exports = router