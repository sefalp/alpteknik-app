
<template>
  <div class="buy-products-page">
      <div class="product-list-container">

          <ul class="buy-product-list" >
              <div class="upper-stuff">
                   <h1> Sepetim </h1>
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
                          

                        <form class="form-bla">
                            <div class="value-button" id="decrease" @click="decreaseValue(item.name,item)" value="Decrease Value"><p class="minus">-</p></div>
                            <input type="number" class="myInput"  :id="item.name" :value="item.quantity" />
                            <div class="value-button" id="increase" @click="increaseValue(item.name,item)" value="Increase Value"><p class="plus">+</p></div>
                        </form>


                      </div>

                  </div>

                  <div class="rightElements">
                     <div class="buyProduct-price">
                      {{item.price}}₺
                        </div>
                         <div class="removeFromSepet">
                        <b-button class="removeSepetButton" @click.prevent="removeFromMinicart(item)" href="#" variant="primary">Kaldır</b-button>
                      </div>
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

import $ from 'jquery'

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
            console.log('nanadasdsad',item)
            //
        },
        increaseValue(name,item) {
        var value = parseInt(document.getElementById(name).value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById(name).value = value;
        this.$store.dispatch('updateItemQuantity',{item : item, qty: value})
        },

        decreaseValue(name,item) {
        var value = parseInt(document.getElementById(name).value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById(name).value = value;
        this.$store.dispatch('updateItemQuantity',{item : item, qty: value})
        },
    removeFromMinicart(item){  
          this.$store.dispatch('removeFromMinicart', item)
      }  
    },
    
    mounted(){
        $(document).on('input', '.my-class', function(){
    alert('Input changed');
});
    }
    }
</script>

<style>


.product-list-container{
    padding-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}

.buy-product-list{
    flex: 3 1 60rem;
    display: flex;
    flex-direction: column;
}

.myInput{
    width: 3rem;
}

.plus{
    font-size: 2rem;
    font-weight: 700;
    color: green;
}
.minus{
    font-size: 2rem;
    font-weight: 700;
    color: red;
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


.form-bla {
  width: 7rem;
  padding: 0;
  margin:0;
  
}

.value-button {
  display: inline-block;
  width: 11px;
  height: 37px;
  padding: 0px 0px 0px 0px;
  background: white;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

.form-bla #decrease {
  margin-right: 0px;
  border-radius: 8px 0 0 8px;
}

.form-bla #increase {
  margin-left: 0px;
  border-radius: 0 8px 8px 0;
}

.form-bla #input-wrap {
  margin: 0px;
  padding: 0px;
}

.myInput{
    text-align: center;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    width: 12rem;
    height: 12rem;
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
  
    font-weight: 500;
    font-size: 2.2rem;
    color: rgb(0, 0, 0);
}

.rightElements{
    flex: 1 1 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.btn.removeSepetButton{
    width: 6rem;
    font-size: 1.2rem;
    background-color: orangered;
    margin-bottom: 2rem;    
}

.btn.removeSepetButton:hover{
    background-color: red;
}

</style>