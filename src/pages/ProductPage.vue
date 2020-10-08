<template>
    <div>
 
        <div class="back-to-result">
            <a href='/'> Ana sayfaya dön </a>
        </div>

             <div  class="details" >

                 <div class="info-container">
                       <div class = "details-image">
                            <img :src='this.item.image'>
                        </div>
                
                        <div class='details-info'>
                            <ul>
                                <li>
                                    <p class="name">{{this.item.name}}</p>
                                </li>
                                <li>
                                    <p class="brand">{{this.item.brand}}</p>
                                </li>
                                <li>
                                    <p class="price"> {{this.item.price}}₺ </p>
                                </li>
                            </ul>
                        </div>
                 </div>

              

                <div class="details-action">
                    <div class="buttons">
                        <button class="buy-prodpage" @click='addToMinicart' href="#" variant="primary">Sepete Ekle</button>
                        <button class="remove-prodpage" @click="deleteProduct" href="#" variant="primary">Sil</button>
                        <button class="arrange-prodpage" href="#" variant="primary">Düzenle</button>
                    </div>
                </div>
        </div>
           
        
    </div> 
</template>

<script>
export default {
    name:'ProductPage',

    props:['id'],

    data(){
        return{
            item : Object
        }
    },
    beforeMount(){
        this.item = this.$store.state.data.filter((prod) => {
            return this.id === prod._id
        })[0]
    },
     methods:{
      deleteProduct(){
        this.$store.dispatch('deleteProduct', this.item)
      },
      addToMinicart(){
          this.$store.dispatch('addToMiniCart', this.item)
      }    
    }
    
}
</script>



<style>

.details{
    display: flex;
    margin: 8rem 16rem 0 0;
    box-shadow: 7px 3px 6px 6px rgb(144, 182, 141);
    padding: 5rem 0 10rem 0;
}

.info-container{
    display: flex;
    flex: 2;
    
}
.details-image{
    margin-right: 3rem;
    flex: 1;
}
.details-image img{
    width: 100%;
}
.details-info{
    flex: 2;
}

.details-info li{
    list-style-type: none;
}

.details-info .name{
    font-size: 2.5rem;
    font-weight: 500;
}
.details-info .brand{
    font-size: 1.5rem;
}
.details-info .price{
    font-size: 2.5rem;
    font-weight: 500;
}

.details-action{
    display: flex;
    flex: 1;
}
.details-action .buttons{
    display: flex;
    flex-direction: column;
    padding-left: 4rem;
    margin-left: 6rem;
    width: 50%;
}
.details-action button{
    margin-bottom: 0.5rem;
    border-radius: 5px;
    height: 10%;
    color: white;
    font-weight: 500;
    font-size: 1.3rem;
}
.buy-prodpage{
    background-color :rgb(255, 166, 0); ;
}

.remove-prodpage{
 background-color: rgb(243, 45, 45) ;
}
.arrange-prodpage{
   background-color : #007bff ;
}

.details-action li{
    list-style-type: none;
}



</style>