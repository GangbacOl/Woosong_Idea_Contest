const router = require('express').Router()
const controller = require('./controller')
const authMiddleware = require('../../../middlewares/auth/auth')


// example code

router.get("/category/get_categories",authMiddleware);
router.get("/category/get_categories",controller.get_categories);

module.exports = router