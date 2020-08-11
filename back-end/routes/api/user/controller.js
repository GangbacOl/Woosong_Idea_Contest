const User = require("../../../models/index").User

exports.get_info= (req,res) => {
    const {idx} = req.params   

    User.findOne({
        where : {
            idx : idx
        }
    })
    .then(result => {
        
        
        if(result){ // 해당 유저가 존재
            console.log(result)
            res.json({
                result : true
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