const User = require("../../../models/index").User
const Email_verified = require("../../../models/index").Email_verified
const email_validator = require("email-validator");
const Sequelize = require('sequelize'); 
const Op = Sequelize.Op;
var crypto = require("crypto");



var generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
    return ranNum;
}

// checking passwd
function generate_passwd_to_hash(passwd,callback){
    crypto.randomBytes(64, (err, buf) => {
        var iterator = generateRandom(40000,100000)
        var salt = buf.toString('base64')
        crypto.pbkdf2(passwd, salt, iterator, 64, 'sha512', (err, key) => {
            key = key.toString('base64')
            callback({
                hash :key,
                salt : salt,
                iterator : iterator
            })
        });
    });
}


const check_email_verified = (email,callback) => {
    Email_verified.findOne({
        where: { email:email }
    }).then((result)=>{
        if ( !result ){ // result가 null or undefined 일때
            callback(false,9,"Unauthenticated email") // code 9 : email이 인증돼지 않았을때
        }else{
            callback(true)
        }
    }).catch(err => {
        callback(false)
    })
}

// method : post
exports.register = (req, res) => {
    const MAXOFACCOUNT=20,MAXOFPASSWD=20,MINOFPASSWD=8,MINOFACCOUNT=8,MAXOFDESCRIPTION=300;
    const MAXOFEMAIL=50,MAXOFNAME=30,MAXOFNICKNAME=20 // 입력값의 길이제한
    // account 중복 체크, email 중복 체크, 닉네임 중복체크(null 가능)
    // account 길이 체크, passwd 길이체크, email형식 체크

    const {account,passwd,passwd_repeat,email,name,nickname,description} = req.body
    let able = true;
    const onError = (error) => {
        console.log("register failed")
        res.status(409).json({
            result : false,
            message: error.message,
            code : error.code
        })
    }
    function createUser(){
        return new Promise((resolve,reject)=>{
            const overlapCheck = (data) => { // type : array
                if(data==!undefined || data.length != 0){
                    reject({"message" : "check { overlap with other user }"});
                    thorw
                }
            }
            
            // length check
            if( (passwd) !== (passwd_repeat)){
                reject({
                    "message" : "check { can't match with passwd & passwd_repeat }",
                    "code" : 1
                })
                return;
            }
            if (( account.length <= MINOFACCOUNT || MAXOFACCOUNT <= account.length )){
                reject({
                    "message" : "check { length of account }",
                    "code" : 2
                })
                return;
            }
            if (( passwd.length <= MINOFPASSWD || MAXOFPASSWD <= passwd.length )){
                reject({
                    "message" : "check { length of password }",
                    "code" : 3
                })
                return;
            }
            if (!(email_validator.validate(req.body.email))){
                reject({
                    "message" : "check { email validator }",
                    "code" : 4
                })
                return;
            }
            if (description.length > 300){
                reject({
                    "message": "the length of description is too long",
                    "code" : 5
                })
                return;
            }
            if ( email.length > MAXOFEMAIL){
                reject({
                    "message": "the length of email is too long",
                    "code" : 6
                })
                return;
            }
            if ( MAXOFNAME <= name.length){
                reject({
                    "message" : "name is too long",
                    "code" : 7
                })
                return;
            }
            if(MAXOFNICKNAME <= nickname.length){
                reject({
                    "message" : "nickname is too long",
                    "code" : 8
                })
                return;
            }

            User.findAll({where: {[Op.or]: [{account: account}, {email: email},{nickname:nickname}]}})
            .then(overlapCheck) 
            .then(
                async () => {
                    await check_email_verified(email,(result,code,message)=>{
                        console.log(result)
                        if(!result){ // result가 실패할 경우
                            console.log("email not authed")
                            reject({
                                "message" : message,
                                "code" : code
                            })
                            return
                        }else{
                            // user create
                            // password 암호화
                            generate_passwd_to_hash(passwd,(data)=>{
                                User.create({
                                    account : account,
                                    passwd : data.hash,
                                    salt : data.salt,
                                    iterator : data.iterator,
                                    email : email,
                                    name : name,
                                    nickname : nickname,
                                    description : description
                                }).then(result => {
                                    resolve(result)
                                }).catch(err => {
                                    reject(err);
                                });
                            })
                        }
                    })
                    
                    
                        
                    
                    
                }
            )
            .catch(err => {
                return
            })   
        })
    }

    createUser().then((result)=>{
        res.json({
            result : true
        })
    }).catch(err=>{
        onError(err)
    })
}


// method : get
// exports.get_email_verified = (req,res) =>{
//     const {email} = req.body 

// }



