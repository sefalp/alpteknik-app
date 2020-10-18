

<template>
  <form class="dropdown-menu keep-inside-clicks-open" aria-labelledby="triggerId">
      <ul class="drop-ul" v-for="item in cartProducts" :key='item._id'>
        <li class="sepet-elements">
            <div class="sepet-img">
                  <img :src='item.image'>
            </div>
            <div class="sepet-product">
                <p id="title">{{item.name}}</p>
                <p id="price">Fiyatı:<b class="price">  {{item.price}}₺</b> </p>
                <p id="price">Adedi:<b class="price">  {{item.quantity}}</b> </p>  
            </div>
            <div class="sepet-button">
             <img @click.prevent="deleteFromMinicart(item)" class="sepet-btn" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png" alt="cross-image"> 
            </div>
        </li>
        <hr>
    </ul>
        <div class="total-price">
            <h3 v-if="getPrice">Toplam Tutar : <b>{{getPrice}}₺</b> </h3>
            <h3 v-else>Sepet Boş</h3>
            <b-button class="gotoTheCart" v-if="getPrice" @click="$router.push({name:'buyProducts'})" data-toggle="dropdown"> Sepetim ▶ </b-button>
        </div>
</form>
</template>


<script>


import {mapGetters} from 'vuex'

export default {
    data(){
        return{}
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
        deleteFromMinicart(item){  
          this.$store.dispatch('deleteFromMinicart', item)
      }  
    }
}


</script>

<style>

.dropdown-menu.keep-inside-clicks-open{
    min-width: 320px;
    right: 0;
    left: auto;
}
.sepet-btn{
    height: 2rem;
    width: 2rem;
    border-radius: 10px;
    justify-items: center;
    align-items: center;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    margin-left: 1rem ;
}
.sepet-elements{
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 2rem;
}
.sepet-img img{
    width: 100%;
}
.sepet-img{
    flex: 2;
    margin-right: 2rem;
}
.sepet-product{
    flex: 3;
}
.sepet-product .price{
    font-size: 1.4rem;
}
.sepet-button{
    flex: 1;
}

.sepet-product #title{
    font-size: 1.5em;
    font-weight: 500;
}
.total-price{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.total-price a{
    font-size: 1.4rem;
    color: red;
    font-weight: 500;
}
.total-price a:hover{
    font-size: 1.4rem;
    color: red;
    text-decoration: none;
}

button.btn.gotoTheCart{
    color: white;
    height: 2.5rem;
    padding-top: 0;
    background-color: rgb(50, 173, 255);
    width: 9rem;
}

button.btn.gotoTheCart:hover{

    background-color: rgb(0, 136, 226);

}


</style>