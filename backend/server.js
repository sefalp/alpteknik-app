const express = require('express')
require('./db/mongoose')
const Product = require('./models/product')


const cors = require('cors')

//const data = require('./data')

const app = express()

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 5000


// product send to database using '/add_new_product' page in website
app.post('/product_send_to_database', (req,res)=>{
    const product = new Product(req.body)

    product.save()
    .then( () => {
        res.send(product)
    })
    .catch( (e) => {
        res.send(`error occured such : ${e}`)
    })
})

// all products come to the website from database for productList
app.get('/', (req, res) => {
    Product.find({})
    .then( products => {
        res.send(products)
    })
    .catch( (e) =>{
        res.send(`error occured such : ${e} `)
    })
})

// wanted product deleted from database
app.post('/delete_product', (req, res) => {
    Product.deleteOne(req.body)
    .then(()=> {
        console.log('item removed!')
    })
    .catch( (e) =>{
        res.send(`error occured such : ${e}`)
    })
})

// edit wanted product in the database
app.patch('/edit_product', (req, res) => {
    Product.findByIdAndUpdate(req.body._id ,req.body)
    .then( () => console.log(res.body))
    .catch( (e) => {
        console.log(`error occured such : ${e}`)
    })
})

// add mutliple items to the database 
app.post('/add_multiple_items', ( req, res )=>{
        var itemsHere = req.body
        itemsHere.forEach(element => {
            var product = new Product(element)

            product.save()
            .then( () => {
                console.log('product saved such : ', product)
            })
            .catch((e)=>{
                console.log('error occured such: ', e)
            })
        });
})

aaaaa

app.listen(port, ()=>{
    console.log(`server listening on localhost : ${port}`)
})