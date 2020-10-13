<template>

     <main class="main">
                <div class="product-list">
                    <ProductCart v-for=" (item, index) in dataAtTheMoment" :key="index" :item='item' />
                </div>
        </main>
</template>

<script>

import ProductCart from './ProductCart'
import {mapGetters} from 'vuex'


export default {
name: 'ProductList',
data(){
    return{
        
    }
},
components: {
    ProductCart
},
computed:{
    ...mapGetters([
        'dataAtTheMoment',
        'getCategories'
    ])
},
mounted() {
    this.$store.dispatch('getProducts');
}
}
</script>

<style>



.main{
    grid-area: main;
    background-color: rgb(255, 255, 255);
}

.product-list {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    padding: 6rem;
    padding-left: 4rem;
}
</style>