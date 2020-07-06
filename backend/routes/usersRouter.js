const router = require('express').Router();
let User = require ('../models/user.model');

//index
router.route('/').get((req, res) => {
    User.find().then(users => res.json(users))
    .catch(error => res.status(400).json(error));
});

//create
router.route('/create').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const user = new User({ username, email });

    user.save().then(() => res.json('Create User success!'))
    .catch(error => res.status(400).json(error));
})

module.exports = router;