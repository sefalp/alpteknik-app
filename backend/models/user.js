const mongoose = require('mongoose')
const { default: validator } = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Geçerli bir email adresi giriniz!')
                }
            }
    },
    password:{
            type: String,
            required: true,
            minlength: 6,
            trim: true,
            validate(value) {
                if(value.includes('123')){
                    throw new Error('Şifre çok kolay, farklı bir şifre giriniz!')
                }
            }
    },

    tokens:[
        {
            token:{
                type : String,
                required: true
            }
        }
    ]
    ,
    minicart:[],

    isAdmin: {
        type: Boolean,
        default: false
    }

})




// static means works on model like "User.findBy..." 
userSchema.statics.findByCredentials = async (email, password) =>{

    const user = await User.findOne({ email })

    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('unable to login')
    }

    

    return user
}


userSchema.methods.generateAuthToken = async function(){
    const user = this

    var token = jwt.sign({ _id : user._id.toString() },'secretkey',{expiresIn: '24 hours'})
    user.tokens = user.tokens.concat({token})

    if( user.email === 'admin@gmail.com')
    {
        user.isAdmin = true
    }

    await user.save() 

    return token
}


// hash the plain text password
userSchema.pre('save', async function(next){
        
    const user = this

    if (user.isModified('password')){
            user.password = await bcrypt.hash(user.password,8)
    }

    next()
})


const User = mongoose.model('User', userSchema )

module.exports = User
