const express = require('express');
const router = new express.Router();
const User = require('../models/user')


// creates new user in database
router.post('/create_user', (req, res)=>{
    const user = new User(req.body)

    user.save()
    .then( () => res.send(user))
    .catch((e) => console.log('error occured such:',e))
})

// 



module.exports = router
