const User = require("../../../models/user")
var email_validator = require("email-validator");


exports.register = (req, res) => {
    const MAXOFACCOUNT=20,MAXOFPASSWD=20,MINOFPASSWD=8,MINOFACCOUNT=8,MAXOFDESCRIPTION=300;
    const MINOFEMAIL=50,MAXOFNAME=30,MAXOFNICKNAME=20 // 입력값의 길이제한
    const {account,passwd,email,name,nickname,description} = req.body
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // account 중복 체크, email 중복 체크, , 닉네임 중복체크(null 가능)
    // account 길이 체크, passwd 길이체크, email형식 체크

    const onError = (error) => {
        console.log("register failed")
        res.status(409).json({
            result : false,
            message: error.message
        })
    }
    
    if (( account.length <= MINOFACCOUNT || MAXOFACCOUNT <= account.length )){
        onError({"message" : "check { length of account }"})
    }

    if (( passwd.length <= MINOFPASSWD || MAXOFPASSWD <= passwd.length )){
        onError({"message" : "check { length of password }"})
    }

    if (!(email_validator.validate(req.body.email))){
        onError({"message" : "check { email validator }"})
    }

    User.findAll({
        where: {
          [Op.or]: [{authorId: 12}, {authorId: 13}]
        }
    });
}