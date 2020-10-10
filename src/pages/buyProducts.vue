
<template>
  <div class="buy-products-page">
      <div class="product-list-container">

          <ul class="buy-product-list" >
              <div class="upper-stuff">
                   <h1> Sepetim </h1>
                   <h3> Fiyat </h3>
              </div>
             
              <li class="product-in-list"  v-for="item in cartProducts" :key='item._id'>

                  <div class="buyProduct-image">
                        <img class="prod-image" :src="item.image">
                  </div>
                 
                  <div class="buyProduct-info">

                      <div class="prod-name">
                          {{item.name}}
                      </div>

                      <div class="prod-brand">
                          {{item.brand}}
                      </div>

                      <div class="prod-qty">
                          Adet:
                          <select :value="item.quantity" @change="updateQuantity(item)" :input="updateQuantity" >
                                <option v-for="x in getArray(item.quantity)" :key="x._id" >{{x+1}}</option>
                          </select>
                      </div>

                  </div>

                  <div class="buyProduct-price">
                      {{item.price}}₺
                  </div>

              </li>
          </ul>

          <div class="cart-action">
              <h3>
                  Toplam Tutar : {{getPrice}}₺
              </h3> 
              <b-button class="buy-productCart" href="#" variant="primary" >Alışverişi Tamamla</b-button>
          </div>

      </div>

  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            form:{
                item: null,
                qty: null
            }
        }
    },
     computed:{
        cartProducts(){
            return this.$store.state.user.minicart;
        },
        ...mapGetters([
            'getPrice'
        ])
    },
    methods:{
        getArray(input){
            var int = parseInt(input)
            return [...Array(int).keys()]
        },
        updateQuantity(item){
            this.$store.dispatch('updateItemQuantity',{item : item, qty: event.target.value})
        }
    }
}
</script>

<style>



.product-list-container{
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
    align-items: flex-start;
}

.buy-product-list{
    flex: 3 1 60rem;
    display: flex;
    flex-direction: column;
}

.cart-action{
    display: flex;
    flex-direction: column; 
    flex: 1 1 15rem;
    background-color: #f8f8f8;
    border: .1rem #808080 solid;
    border-radius : 0.5rem;
    padding: 3rem 2rem;
    height: 15rem;
    margin-left: 1rem;


}

.upper-stuff{
    display: flex;
    justify-content: space-between;
    border-bottom: .2rem solid rgba(255, 0, 0, 0.5);
    padding: 0 6% 1.2rem 3%;

}

.product-in-list{
     display: flex;
     border-bottom: .2rem solid rgba(255, 0, 0, 0.5);
     margin: .3rem 0;
     padding-bottom: .2rem ;
}


.buyProduct-image{
    flex: 2 1 20rem;
}
.prod-image{
    width: 15rem;
    height: 15rem;
}

.buyProduct-info{
    flex: 8 1 80rem;
    display: flex;
    flex-direction: column;
    padding: 2rem 0 .5rem 0;
}

.prod-name{
    font-weight: 500;
    padding-bottom: .5rem;
    font-size: 1.4rem;
}

.prod-brand{
    font-weight: 600;
    color: dark-gray;
    padding-bottom: 1rem;
}

.btn.buy-productCart.btn-primary{
    background-color: rgb(255, 166, 0);
    font-size: 1.4rem;
    margin-top: 1rem;
}

.buyProduct-price{
    flex: 1 1 10rem;
    font-weight: 500;
    font-size: 2.2rem;
    color: rgb(0, 0, 0);
}

</style>