const User = require("../../../models/index").User
const email_validator = require("email-validator");
const Sequelize = require('sequelize'); 
const Op = Sequelize.Op;
const encrypt_config = require("../../../config/config.json").encrypt

var bkfd2Password = require('pbkdf2-password');
var hasher = bkfd2Password();

exports.register = (req, res) => {
    const MAXOFACCOUNT=20,MAXOFPASSWD=20,MINOFPASSWD=8,MINOFACCOUNT=8,MAXOFDESCRIPTION=300;
    const MINOFEMAIL=50,MAXOFNAME=30,MAXOFNICKNAME=20 // 입력값의 길이제한
    // account 중복 체크, email 중복 체크, 닉네임 중복체크(null 가능)
    // account 길이 체크, passwd 길이체크, email형식 체크

    const {account,passwd,passwd_repeat,email,name,nickname,description} = req.body

    const onError = (error) => {
        console.log("register failed")
        res.status(409).json({
            result : false,
            message: error.message
        })
    }
    function createUser(){
        return new Promise((resolve,reject)=>{
            const overlapCheck = (data) => { // type : array
                if(data==!undefined || data.length != 0){
                    reject({"message" : "check { overlap with other user }"});
                }
            }
            if( (passwd) == (passwd_repeat))
            if (( account.length <= MINOFACCOUNT || MAXOFACCOUNT <= account.length )){
                reject({"message" : "check { length of account }"})
            }

            if (( passwd.length <= MINOFPASSWD || MAXOFPASSWD <= passwd.length )){
                reject({"message" : "check { length of password }"})
            }

            if (!(email_validator.validate(req.body.email))){
                reject({"message" : "check { email validator }"})
            }

            console.log(User)

            User.findAll({where: {[Op.or]: [{account: account}, {email: email},{nickname:nickname}]}})
            .then(()=>{
                console.log("able to make account")
                // user create

                // password 암호화
                salt = encrypt_config.salt
                hasher({password: passwd}, (err, passwd, salt, hash) => {
                    console.log(hash)
                });
                // User.create({
                //     account : account,
                //     passwd : passwd,
                //     email : email,
                //     name : name,
                //     nickname : nickname,
                //     description : description
                // })
            })
            .then(overlapCheck) 
            .catch(err => {
                console.log(err)
                res.send(err)
            })   
        })
    }

    createUser().then().catch(err=>{
        console.log(err)
        res.json(err)
    })
}