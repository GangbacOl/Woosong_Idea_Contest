const express = require("express")
const app = express()
const sequelize = require('./models/index').sequelize;
var bodyParser = require('body-parser')
const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const cors = require("cors")
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'));
app.use('/api', require('./routes/index'))
app.use(cookieParser());


/* //배포시 적용
var jwt_secret = crypto.createHash('sha256').update(Math.random().toString()).digest('base64');
crypto.randomBytes(64, (err, buf) => {
    crypto.pbkdf2(jwt_secret, buf.toString('base64'), 671321 , 64, 'sha512', (err, key) => {
        jwt_secret = key.toString('base64'); // jwt secret is random
        app.set('jwt-secret', jwt_secret);
    });
});
*/

///* 배포 전 적용
const jwt_secret = "ABCD"
app.set("jwt-secret",jwt_secret)
//*/

// set jwt_secret <= this is random
console.log("jwt_secret : "+jwt_secret);


// router


sequelize.sync(); // database sync

app.listen(PORT,()=>{
    console.log("server on")
})
