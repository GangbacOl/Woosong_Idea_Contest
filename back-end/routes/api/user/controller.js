const User = require("../../../models/index").User


var md5 = require('md5');




exports.get_info= (req,res) => {
    const {idx} = req.params   

    User.findOne({
        where : {
            idx : idx
        }
    })
    .then(result => {
        if(result != null){ // 해당 유저가 존재
            const {idx,name,nickname,email,description,profile_image,createdAt} = result.dataValues
            res.json({
                result : true,
                idx,
                profile_image,
                email,
                name,
                nickname,
                description,
                createdAt
            })
        }else{
            res.json({
                result:false,
                code : 1 // 해당 유저가 존재하지 않음
            })
        }
            
    })
    .catch(err=>{
        console.log(err)
        res.json({
            result : false,
            code : 2 // 서버오류
        })
    })
}

exports.update_profile_image = (req,res) => {
    const user_token = req.decoded

    res.send("Uploaded!"+req.file)
    console.log(req.file)

    /*
    User.findOne({
        where : {
            account : user_token.account
        }
    })
    .then(result => {
        let image_path = "/profile_images/"
        const image_name = md5(result.dataValues.idx+"a")
        image_path += image_name
        
        console.log(image_path)
    })
    .catch(err => {
        res.json({
            result : false,
            code : 1 // server error
        })
    })
    */
}