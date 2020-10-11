<template>
  
     <main class="main">
                <div class="product-list">
                    <ProductCart v-for=" item in getDataAccordingToCategory(input)" :key="item._id" :item='item' />
                </div>

                <ul class="navLinks">
                    <li v-for="category in getCategories" :key="category">
                          <a href='#' @click="$router.push({name:'categoryData', params:{input : category}})" >{{category}}</a>
                    </li>
                </ul>

        </main>

</template>

<script>

import ProductCart from '../components/ProductCart'
import {mapGetters} from 'vuex'


export default {
name: 'categoryData',

props:{
        input: {
            type: String
        }
    },

data(){
    
    return{}
},

components: {
    ProductCart
},

computed:{
    ...mapGetters([
        'getCategories',
        'getDataAccordingToCategory'
    ]),
},

mounted() {
    this.$store.dispatch('getProducts');
}
}
</script>

<style>

</style>