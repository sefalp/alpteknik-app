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
    return{}
},
components: {
    ProductCart
},
computed:{
    ...mapGetters([
        'dataAtTheMoment'
    ])
},
mounted() {
    this.$store.dispatch('getProducts');
}
}
</script>

<style>

.product-list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 6rem;
}
</style>