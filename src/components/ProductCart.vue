<template>
    <div class="product-card">
        <div class="product-image">
            <img :src='image'>
        </div>
        <div class="product-info">
            <router-link :to="{name: 'product-page', params: {id:item._id}}"><p class="product-name"> {{name}} </p></router-link>
            <p class="product-brand"> {{brand}} </p>
            <p class="product-price"> {{price}}₺ </p>
        </div>

        <div class="cart-buttons">
                <b-button @click='addToMinicart'  class="buy" href="#" variant="primary">Sepete Ekle</b-button>
            <div class="admin-buttons">
                <b-button class="remove" @click="deleteProduct" href="#" variant="primary">Sil</b-button>
                <b-button class="arrange" @click="$router.push({ name: 'edit_product', params: { id: item._id }})" variant="primary">
                    Düzenle
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',

    props: {
        item: Object
    },
    
    data(){
        return{
            name: this.item.name,
            image: this.item.image,
            brand: this.item.brand,
            price: this.item.price
        }
    }
    ,

    methods:{
      deleteProduct(){
        this.$store.dispatch('deleteProduct', this.item)
        location.reload();
      },
      addToMinicart(){
          this.$store.dispatch('addToMiniCart', this.item)
          this.$store.dispatch('getTotalPrice')
          
      }    
    }
}
</script>

<style>


.product-card {
  font-family:'Poppins', sans-serif;   
  margin: 1.5rem;
  padding: 2%;
  flex-basis: 20%;

  display: flex; /* so child elements can use flexbox stuff too! */
  flex-direction: column;
  box-shadow: 2px 2px 3px 2px rgb(206, 156, 156);
}

/* image */

.product-image{
    flex: 2;
    margin-bottom: 1rem;
}
.product-image img {
  width: 100%;
}

/* info */

.product-info {
  padding-top: 1rem;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-bottom: 1rem;

}

.product-name{
    font-size: 1.8rem ;
    font-weight: 500;
    margin-bottom: 0.2rem ;
}
.product-brand{
    font-size: 1.3rem ;
    font-weight: 500;
    color: darkslategray;
    margin-bottom: 0.2rem ;
}
.product-price{
    font-size: 1.8rem ;
    font-weight: 600;
}

/* buttons */

.cart-buttons{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0.3rem;
    justify-content: space-evenly;
}

.admin-buttons{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
   
.buy{
    flex-basis: 90%;
    margin-bottom: 0.5rem;
}
.remove{
    flex-basis: 42%;
}
.arrange{
    flex-basis: 42%; 
}

.btn.buy.btn-primary{
    background-color: rgb(255, 166, 0);
    font-size: 1.4rem;
}

.btn.arrange.btn-primary{
   background-color : #007bff ;
}
.btn.remove.btn-primary{
    background-color: rgb(243, 45, 45) ;
}




</style>