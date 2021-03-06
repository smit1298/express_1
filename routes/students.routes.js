const express = require('express');

const data = require('../data')

const router = express.Router();



router.get('/', (req, res, next) =>{
    res.render('students/student-list.ejs', {
        title: 'Students',
        students: data,
    })
})

router.get('/:id/:name', (req, res, next) =>{
    const id = parseInt(req.params.id);
    const student = data.find((students) => {
        if (id === students.id){
            return students;
        }
    });


    res.send (
        `<h1> this is ${student.name} and his email is ${student.email} \n he is position number ${student.id}`
        );
    });


router.get('/api/students/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const student = data.find((students) =>{
        if (id === students.id){
            return students;
        }
    });
    res.status(200).json({
        student,
    });
});

module.exports = router;