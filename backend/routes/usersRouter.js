const router = require('express').Router();
let User = require ('../models/user.model');

//index
router.route('/').get((req, res) => {
    User.find().then(users => res.json(users))
    .catch(error => res.status(400).json({error}));
});

//create
router.route('/create').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const user = new User({ username, email });

    user.save().then(() => res.json({
        message : 'Create User success!',
        obj: user
    }))
    .catch(error => res.status(400).json({error}));
})

//detail
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        if(user != null){
            res.json({
                message : 'Get User success!',
                obj: user
            })
        }else{
            res.status(404).json({message : 'User not found'})
        }
    })
    .catch(error => res.status(400).json({error}));
});

// //update
// router.route('/update/:id').post((req, res) => {
//     User.findById(req.params.id)
//     .then(user => {
//         if(user != null){
//             if(req.body.username != null) user.username = req.body.username;
//             if(req.body.email != null) user.email = req.body.email;
    
//             user.save().then(user => res.json({
//                 message: 'Update User success!',
//                 obj: user
//             })).catch(error => res.status(400).json({error}))
//         }else{
//             res.status(404).json({message : 'User not found'})
//         }
//     })
//     .catch(error => res.status(400).json({error}));
// });

// //delete
// router.route('/delete/:id').delete((req, res) => {
//     User.findById(req.params.id)
//     .then(user => {
//         if(user != null) {
//             User.deleteOne(user)
//             .then(() => res.json({ message : 'Delete User success!' }))
//             .catch(error => res.status(400).json({error}))
//         }else{
//             res.status(404).json({message : 'User not found'})
//         }
//     })
//     .catch(error => res.status(400).json({error}));
// });

module.exports = router;