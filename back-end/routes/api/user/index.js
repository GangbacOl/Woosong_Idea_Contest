const router = require('express').Router()
const controller = require('./controller')
const authMiddleware = require('../../../middlewares/auth/auth')


router.get("/",(req,res)=>{res.json({result : true})})
//router.get("/get_info/:idx",authMiddleware)
router.get("/get_info/:idx",controller.get_info)

module.exports = router