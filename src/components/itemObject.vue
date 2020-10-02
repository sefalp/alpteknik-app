<template>
<div> 
    <h1>{{name}}</h1>
    <button @click="deleteProduct"> Sil </button>
</div>

</template>

<script>

import {mapActions} from 'vuex'

export default {

    props:{
         product : Object
    }
   ,
    data(){
    return{
        id : this.product._id,
        name: this.product.name,
        brand : this.product.brand,
        price : this.product.price
    }
},
methods:{
    ...mapActions([
        'deleteProduct',
        'addToMinicart'
    ])
}
}
</script>

<style>

</style>