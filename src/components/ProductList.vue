<template>

     <main class="main">
                <div class="product-list">
                    <ProductCart v-for=" (item, index) in dataAtTheMoment" :key="index" :item='item' />
                </div>

                <ul class="navLinks">
                    <li v-for="category in getCategories" :key="category">
                        <a href='#'>{{category}}</a>
                    </li>
                </ul>

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

.navLinks {
    position: fixed;
    top: 4rem;
    bottom: 2.5rem;
    width: 18rem;
    background-color: rgb(45, 133, 95);
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in;
    justify-content: space-evenly;
}

.nav-active{
    transform: translateX(0%);
}

.navLinks li{
    padding: 0 2rem; 
    opacity: 0;
}

.navLinks a{
    font-size: 2.5rem;
    text-decoration: none;
    color: white;
}
.navLinks a:hover{
    font-size: 2.5rem;
    text-decoration: none;
    color: #0dff00;
}

@keyframes navLinkFade {
    from {opacity: 0;
          transform: translateX(-50px);      
        }
    to {opacity: 1;
        transform: translateX(0px);      
      }
  }

  .toggle .line1{
      transform: rotate(-45deg) translate(-4px,5px);
      
  }
  .toggle .line2{
    opacity: 0;
    }
    .toggle .line3{
        transform: rotate(45deg) translate(-4px,-5px);
    
    }

.product-list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 6rem;
}
</style>