<template>
  <div class="dropdown-menu divs" aria-labelledby="triggerId">

      <div class="divs" v-for="item in cartProducts" :key='item._id'>
        <div class="sepet-elements">
            <div class="sepet-img">
                  <img :src='item.image'>
            </div>
            <div class="sepet-product">
                <p id="title">{{item.name}}</p>
                <p id="price">Fiyatı:<b class="price">  {{item.price}}₺</b> </p>
                <p id="price">Adedi:<b class="price">  {{item.quantity}}</b> </p>  
            </div>
            <div class="sepet-button">
                <button @click.prevent="deleteFromMinicart(item)" class="sepet-btn" href="#" > Sil </button>
            </div>
        </div>
        <hr>
    </div>
        <div class="total-price">
        <h3>Toplam Fiyat : {{totalPrice}}</h3>
        <a href="#"> Ürünleri Kaldır </a>
    </div>

</div>
</template>


<script>

export default {
    data(){
        return{}
    },
    computed:{
        cartProducts(){
            return this.$store.state.minicartData;
        },
        totalPrice(){
            return this.$store.state.totalMinicartPrice;
        }
    },
    methods:{
        deleteFromMinicart(item){  
          this.$store.dispatch('deleteFromMinicart', item)
      }  
    }
}

</script>

<style>

.dropdown-menu.divs{
    min-width: 320px;
    right: 0;
    left: auto;
}
.sepet-btn{
    height: 2rem;
    width: 4rem;
    border-radius: 10px;
    justify-items: center;
    align-items: center;
    font-size: 1rem;
}
.sepet-elements{
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
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

</style>