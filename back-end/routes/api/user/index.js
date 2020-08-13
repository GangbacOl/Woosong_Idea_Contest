const router = require('express').Router()
const controller = require('./controller')
const authMiddleware = require('../../../middlewares/auth/auth')
// const multer = require('multer');
// const upload = multer({
//     storage: multer.diskStorage({
//       // set a localstorage destination
//       destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//       },
//       // convert a file name
//       filename: (req, file, cb) => {
//         cb(null, new Date().valueOf() + path.extname(file.originalname));
//       },
//     }),
// });
// // const profile_image_upload = multer({dest: '../../../public/profile_images'}) //dest : 저장 위치


// router.get("/",(req,res)=>{res.json({result : true})}) // test code
router.get("/get_info/:idx",authMiddleware)
router.get("/get_info/:idx",controller.get_info)

//router.post("/update_profile_image",authMiddleware)
//router.post("/update_profile_image",profile_image_upload.single("img"),controller.update_profile_image)
// router.post('/update_profile_image', upload.single('img'), (req, res) => {
//     console.log(req.file); 
//     res.send(req.file)
// });

router.get("/search_with_nickname/:nickanme",controller.search_with_nickname)


module.exports = router