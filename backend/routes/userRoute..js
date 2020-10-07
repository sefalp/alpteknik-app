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
    const password = req.body.password
    const user = await User.findOne({email})
    const currentUser = await User.findOne(req.user)

    if(req.body.password === req.body.re_password){
         await currentUser.doesPasswordCorrect(password)
    }
    else{
        throw new Error(' Şifreler birbiriyle uyumlu değil ! ')
    }
   
    if( (email === currentUser.email) || (email !== currentUser.email && user === null) ){

        const updates = Object.keys(req.body)
        updates.forEach( (update) => req.user[update] = req.body[update] )
        await req.user.save()
        res.send(req.user)

    }else{
        res.send('olmaz')
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
