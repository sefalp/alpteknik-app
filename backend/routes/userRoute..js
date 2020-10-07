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

router.post('/user/getUser', Auth, async (req, res)=>{

    try{

    const email = req.body.email
    console.log(email)
    const user = await User.findOne({email})
    console.log(user)
    if(user === null){
        res.send('sahipsiz')
    }else{
        res.send('sahipli')
    }
    
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

// log the user out from site
router.get('/user/logout', Auth, async (req, res) =>{
    try{

     
        req.user.tokens = req.user.tokens.filter((toki) =>{
            return toki.token !== req.token  
        }) 
        await req.user.save()
        res.send(req.token)
    }
    catch(e){
        res.status(400).send(e)
    }
})


// arrange user information from server
router.post('/user/settings', Auth, async (req, res) => {
    try{
        console.log(req.body)
    }
    catch(e){
        res.status(400).send(e)
    }
})






module.exports = router
