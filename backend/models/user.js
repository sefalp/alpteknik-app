const mongoose = require('mongoose')
const { default: validator } = require('validator')


const User = mongoose.model('User', {
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

module.exports = User
