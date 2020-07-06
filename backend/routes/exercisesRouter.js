const router = require('express').Router();
let Exercise = require ('../models/exercise.model');

//index
router.route('/').get((req, res) => {
    Exercise.find().then(exercises => res.json(exercises))
    .catch(error => res.status(400).json(error));
});

//create
router.route('/create').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const durantion = req.body.durantion;
    const date = req.body.date;

    const exercise = new User({ name, description, durantion, date });

    exercise.save().then(() => res.json('Create Exercise success!'))
    .catch(error => res.status(400).json(error));
})

module.exports = router;