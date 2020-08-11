const router = require('express').Router()
const auth = require('./api/auth')
const mail = require('./api/mail')
const post = require('./api/post')
const category = require('./api/category')
const user = require('./api/user')


router.use('/auth', auth)
router.use('/mail', mail)
router.use("/post", post)
router.use("/category", category)
router.use("/user",user)

module.exports = router