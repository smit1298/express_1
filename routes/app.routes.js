const express = require('express');


const router = express.Router();


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

router.post('/message', (req, res, next) => {
    console.log(req.body);
    res.send(req.body);
});



module.exports = router;