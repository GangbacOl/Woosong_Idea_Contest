const router = require('express').Router()
const controller = require('./controller')

router.get('/send_auth_mail/:email',controller.send_auth_mail);
router.post('/cmp_auth_code',controller.cmp_auth_code)

module.exports = router