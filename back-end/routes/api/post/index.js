const router = require('express').Router()
const controller = require('./controller')
const authMiddleware = require('../../../middlewares/auth/auth')



router.get("/test",authMiddleware)
router.get("/test",controller.test)

module.exports = router