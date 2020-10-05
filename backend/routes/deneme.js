const jwt = require('jsonwebtoken')

var token = jwt.sign({_id: '12345'}, 'secrettoken', {expiresIn: '15 seconds'})

var isVerified = jwt.verify(token, 'secrettoken')


console.log(isVerified)