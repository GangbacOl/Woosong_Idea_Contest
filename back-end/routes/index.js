const router = require('express').Router()
const auth = require('./api/auth')
const mail = require('./api/mail')
const post = require('./api/post')

router.use('/auth', auth)
router.use('/mail', mail)
router.use("/post", post)


module.exports = router