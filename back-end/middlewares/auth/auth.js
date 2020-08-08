var jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    // read the token from header or url 
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    // token does not exist
    if(!token) {
        return res.redirect("/")
    }

    // create a promise that decodes the token
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    // if it has failed to verify, it will return an error message
    const onError = (error) => {
        res.redirect("/")
    }

    // process the promise
    p.then((decoded)=>{
        req.decoded = decoded
        console.log(decoded)
        next()
    }).catch(onError)
}

module.exports = authMiddleware