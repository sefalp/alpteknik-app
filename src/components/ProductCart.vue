<template>

    <div  class="product-card">

        <div class="product-image">
            <img :src='image'>
        </div>

        <div class="product-info">
            <p class="product-price"> {{price}}₺ </p>
            <p class="product-brand"> {{brand}} </p>
            <p class="product-description"> {{name}} </p>
        </div>

        <div class="cart-buttons"  >
                <b-button v-if="!user.isAdmin" @click='addToMinicart'  class="buy" href="#" variant="primary" >Sepete Ekle</b-button>
            <div class="admin-buttons" v-else>
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
      async deleteProduct(){
          try{
              await  this.$store.dispatch('deleteProduct', this.item)
              this.$router.push({name: 'home'})
          }catch(e){
              console.log(e)
          }
        
        
      },
      addToMinicart(){
          this.$store.dispatch('addToMiniCart', this.item)
          
      }    
    },
    computed:{
    user(){
        return this.$store.state.user
    }
    }
}
</script>

<style>


.product-card {
  font-family:'Poppins', sans-serif;   
  margin: 2.5rem;
  padding: 1rem;
  flex-basis: 18rem;

  display: flex; /* so child elements can use flexbox stuff too! */
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 3px 2px rgb(206, 156, 156);
  height: 30rem;
}

/* image */

.product-image{
    cursor: pointer;
}
.product-image img {
  width: 15rem;
  height: 15rem;
}

.product-description{
    text-align: center;
}

/* info */

.product-info {
  padding-top: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8rem;
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
    font-weight: 600;
}
.product-price{
    font-size: 1.8rem ;
    font-weight: 600;
    color: rgb(255, 103, 48);
    margin-bottom: 0;
}

@media (max-width: 1200px) {
.product-card {
  font-family:'Poppins', sans-serif;   
  margin: 2.5rem;
  padding: 1rem;
  flex-basis: 14rem;

  display: flex; /* so child elements can use flexbox stuff too! */
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 3px 2px rgb(206, 156, 156);
  height: 22rem;
}


/* image */

.product-image{
    cursor: pointer;
}
.product-image img {
  max-width: 10rem;
  height: 10rem;
}

.product-description{
    text-align: center;
    padding:0;
    margin:0;
}

/* info */

.product-info {
  padding-top: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8rem;
}

.product-name{
    font-size: 1.6rem ;
    font-weight: 500;
}
.product-brand{
    font-size: 1.1rem ;
    font-weight: 500;
    color: darkslategray;
    font-weight: 600;
    margin:0;
    padding:0;
}
.product-price{
    font-size: 1.6rem ;
    font-weight: 600;
    color: rgb(255, 103, 48);
}
}

/* buttons */

.cart-buttons{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.admin-buttons{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: .5rem;
}
   
.buy{
    flex-basis: 90%;
    margin-bottom: 0.5rem;
    margin-top: .5rem;
    align-items: center;
    
}
.remove{
    flex-basis: 45%;
     align-items: center;
}
.arrange{
    flex-basis: 45%; 
     align-items: center;
}

.btn.buy.btn-primary{
    background-color: rgb(255, 166, 0);
    font-size: 1.rem;
}

.btn.arrange.btn-primary{
   background-color : #007bff ;
}
.btn.remove.btn-primary{
    background-color: rgb(243, 45, 45) ;
}




</style>