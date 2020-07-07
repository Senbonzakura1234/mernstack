const router = require('express').Router();
let Exercise = require ('../models/exercise.model');

//index
router.route('/').get((req, res) => {
    Exercise.find().then(exercises => res.json(exercises))
    .catch(error => res.status(400).json({error}));
});

//create
router.route('/create').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const durantion = Number(req.body.durantion);
    const date = Date.parse(req.body.date);

    const exercise = new Exercise({ username, description, durantion, date });

    exercise.save().then(() => res.json({
        message : 'Create Exercise success!',
        obj: exercise
    }))
    .catch(error => res.status(400).json({error}));
})

//detail
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        if(exercise != null){
            res.json({
                message : 'Get Exercise success!',
                obj: exercise
            })
        }else{
            res.status(404).json({message : 'Exercise not found'})
        }
    })
    .catch(error => res.status(400).json({error}));
});

//update
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        if(exercise != null){
            if(req.body.username != null) exercise.username = req.body.username;
            if(req.body.description != null) exercise.description = req.body.description;
            if(req.body.durantion != null) exercise.durantion = Number(req.body.durantion);
            if(req.body.date != null) exercise.date = Date.parse(req.body.date);
    
            exercise.save().then(exercise => res.json({
                message: 'Update Exercise success!',
                obj: exercise
            })).catch(error => res.status(400).json({error}))
        }else{
            res.status(404).json({message : 'Exercise not found'})
        }
    })
    .catch(error => res.status(400).json({error}));
});

//delete
router.route('/delete/:id').delete((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        if(exercise != null) {
            Exercise.deleteOne(exercise)
            .then(() => res.json({ message : 'Delete Exercise success!' }))
            .catch(error => res.status(400).json({error}))
        }else{
            res.status(404).json({message : 'Exercise not found'})
        }
    })
    .catch(error => res.status(400).json({error}));
});

module.exports = router;