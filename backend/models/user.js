const mongoose = require('mongoose')
const { default: validator } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
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
