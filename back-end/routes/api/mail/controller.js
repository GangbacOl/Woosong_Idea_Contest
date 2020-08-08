const Email_verified = require("../../../models/index").Email_verified
const email_validator = require("email-validator");
// configs
const mail_info = require('../../../config/config.json').mailer

// util to send mail
const nodemailer = require('nodemailer');
const smtpTransport = require("nodemailer-smtp-pool");

var transporter = nodemailer.createTransport(smtpTransport({
    service: mail_info.service,
    host: mail_info.host,
    auth: {
      user: mail_info.user,
      pass: mail_info.pass
    }
}));

const make_random_key = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@-=<>";

    for( var i=0; i < 50; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const find_mail_row = (email,callback) => {
    Email_verified.findOne({
        where : {
            email : email
        }
    }).then(result => {
        if(!result){
            callback(false,result) // result : false,data : result
        }else{
            callback(true,result) // result : true, data : result
        }
    }).catch(err => {
        console.log(false,err,10)
    })
}

const send_mail = (mailOptions,callback) => {
    let succeed = false
    transporter.sendMail(mailOptions, (err, mail_res) => {
        
        if (err) {
            console.log('failed... => ', err);
            callback(succeed,2)
        } else { // 메일을 보내는것에 성공했을때
            succeed = true
            console.log('succeed... => ', mail_res);

            callback(succeed)
        }
        
        console.log("transporter close")
        transporter.close();
    });
}


exports.send_auth_mail =(req,res) => { // 이메일 인증코드를 이메일로 보내고 결과를 리턴
    // 1분이내에 요청한 메일로 메일을 보낸적이 있는지 확인하여 1분이 지났나있다면 
    // 혹은 요청한 메일이 없대면 메일 발송
    const {email} = req.params;
    if(!(email_validator.validate(email))){
        res.json({result:false,code : 1})
        return;
    }

    console.log(email)
    find_mail_row(email,(result,data,code)=>{  
        // 이미 보낸적이 있는 유저 
        if(result){
            // data 를 비교해 발송여부 판단.
            var now = new Date()
            var d = now.getTime() - data.dataValues.updatedAt.getTime() // Differene
            if(d > 15000){
                var authkey = make_random_key()
                let mailOptions = {
                    from: mail_info.user,    
                    to: email ,                     // 수신 메일 주소
                    subject: 'Sending Email using Node.js',   // 제목
                    text: 'auth key : '+authkey  // 내용
                };
                send_mail(mailOptions,(succeed,code)=>{
                    Email_verified.update({
                        verify_code : authkey
                    }, 
                        {
                            where: {
                                email : email
                            }
                    })
                    .then(result => {
                        res.json({result:true})
                    })
                    .catch(err => {
                        console.log(err)
                        res.json({result:false,code:3})
                    });
                })

            }else { // 이메일을 보낼 수 없음
                res.json({result : false,code:4})

            }
            
        }else if(!result && code == undefined){ // mail을 찾지 못했을때
            // 메일을 발송!
            console.log("mail send!")
            let authkey = make_random_key()
            let mailOptions = {
                from: mail_info.user,    
                to: email ,                     // 수신 메일 주소
                subject: 'Sending Email using Node.js',   // 제목
                text: 'auth key : '+authkey  // 내용
            };
            send_mail(mailOptions,(succeed,code) => {
                if(succeed){
                    // DB에 추가
                    Email_verified.create({
                        email : email,
                        verify_code :authkey
                    })
                    .then(result => {
                        returned = true;
                        res.json({
                            result : succeed
                        })
                    })
                    .catch(err => {
                        console.error(err);
                        returned = true;
                        res.json({
                            result:succeed,
                            code : 3 // 이메일을 보낸 후 DB에 저장 실패
                        })
                    });
                }else{
                    res.json({result : succeed,code:code})
                }
            })
            
        }else{ // 이상한경우
            res.json({result : false,code:code,message:"mail query error"})
        }
    })
}

// method : post
exports.cmp_auth_code = (req,res) => {  // auth mail을 받아 이메일 인증코드를 검증하여 결과를 리턴
    // 사용자가 이메일인증번호를 입력하면 대조하여 같을시 verified를 true로
    const {email,auth_key} = req.body

    find_mail_row(email,(result,data) =>{
        if(result){
            console.log(data.dataValues.verify_code)
            if(data.dataValues.verified){
                res.json({
                    result : false,
                    code : 4 // 이미 인증됨
                })
                return
            }
            if (data.dataValues.verify_code === auth_key){// auth성공

                Email_verified.update({
                    verified : true
                }, 
                    {
                        where: {
                            email : email
                        }
                })
                .then(result => {
                    res.json({
                        result : true
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.json({result:false,code:3})
                });

                
            }else{ // 실패
                res.json({
                    result : false,
                    code : 2 // auth key 가 같지 않음
                })
            }
        }else {
            console.log("mail didn\'t send")
            {
                res.json({
                    result: false,
                    code : 1 // 인증요청을 한 적이 없음
                })
            }
        }
    })
}