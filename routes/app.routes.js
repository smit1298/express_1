const express = require('express');


const router = express.Router();
const multer = require('multer');
const path = require('path');

router.get('/', (req, res, next) => {
    res.render('index.ejs', {
        title: "Home😊😊"
    })
});

router.get('/about', (req, res, next) => {
    res.render('about.ejs', {
        title: 'About-usℹℹ'
    })
});

router.get('/contact', (req, res, next) => {
    res.render('contact.ejs', {
        title: 'Contact📞☎'
    })
});
// STORING FILES ONLINE

const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        return callback(null, 'uploads/student-img/');
    },
    filename: (req, file, callback) => {
   return callback(null, `${Date.now()}-${file.originalname}`);
    },
    fileFilter: (res, file, callback) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.jpg' || ext !== '.png' || ext !== 'jfif') {
            return callback(
                res.status(400).end('only jpg, png and jfif are allowed'),
                false
            );
        }
        return callback(null, true);
    },
});
const upload = multer({storage});

router.post('/message', upload.single('contactImg'), (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    res.send(req.body);
});



module.exports = router;