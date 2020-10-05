const express = require('express');
const router = new express.Router();
const User = require('../models/user')
const Auth = require('../middlewares/Auth')

// creates new user in database
router.post('/user/create', async (req, res)=>{

    const user = new User(req.body)
    
    try{

    await user.save()
    const token = await user.generateAuthToken()
    res.send(user)
    console.log(user.isAdmin)

    }catch(e){

        res.status(400).send(e)

    }
})


// check if login successful or not 
router.post('/user/login', async (req, res) =>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.post('/user/logout', Auth, async (req, res) =>{
    try{
        req.user.tokens = req.user.tokens.filter((toki) =>{
            return toki.token !== req.token  
        }) 
        await req.user.save()
        res.send('user logged out!')
    }
    catch(e){
        res.status(400).send(e)
    }
})






module.exports = router
