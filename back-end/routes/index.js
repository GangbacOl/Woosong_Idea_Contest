const router = require('express').Router()
const auth = require('./api/auth')
const mail = require('./api/mail')
const post = require('./api/post')

router.use('/auth', auth)
router.use('/mail', mail)
router.use("/post", post)
router.use("/category", post)


module.exports = router