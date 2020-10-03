const express = require('express');
const router = new express.Router();
const User = require('../models/user')


// creates new user in database
router.post('/user/create', (req, res)=>{
    const user = new User(req.body)

    user.save()
    .then( () => res.send(user))
    .catch((e) => console.log('error occured such:',e))
})


// check if login successful or not 
router.post('/user/sign-up',(req, res) =>{

    const user = User.findByCredentials(req.body.email, req.body.password)
    .then( () => res.send(user) )
    .catch( (e) => console.log('the error occured such: ', e))

})



module.exports = router
