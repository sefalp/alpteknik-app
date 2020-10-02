<template>
 <div class="form-container">
    <b-form class="edit-product-form" @submit.prevent="handleSubmit">
      <h1>Ürün Düzenleme Formu</h1>
      <b-form-group
        id="name"
        label="Ürünün adı:"
        label-for="input-1"
      >
        <b-form-input
          id="name"
          v-model="item.name"
          type='text'
          required
          placeholder="İsim Giriniz"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="image" label="Ürünün resmi:" label-for="input-2">
        <b-form-input
          id="image"
          v-model="item.image"
          type='text'
          required
          placeholder="Resim (URL) Giriniz"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="brand" label="Ürünün markası:" label-for="input-3">
        <b-form-input
          id="brand"
          v-model="item.brand"
          type='text'
          required
          placeholder="Marka Giriniz"     
        ></b-form-input>
      </b-form-group>

      
      <b-form-group id="price" label="Ürünün fiyatı:" label-for="input-3">
        <b-form-input
          id="price"
          v-model="item.price"
          required
          value=""
          placeholder="Fiyat Giriniz"     
        ></b-form-input>
      </b-form-group>

        <b-button @click="EditProduct(id, item)" type="submit" variant="primary">Düzenle</b-button>

     </b-form>
  </div>  
</template>

<script>


export default {
    props:{
        id: {
            type: String
        }
    },
    data(){
        return{
            item : {}
        }
    }, 
    mounted(){
        this.item = this.$store.state.data.filter( (product) => {return product._id === this.id})[0]
    },
    methods:{
        EditProduct(){
            this.$store.dispatch('editProduct', this.item)
        }
    }
}
</script>

<style>

.form-container{
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.form-container h1{
  margin-bottom: 2rem;
}

.form-container .btn{
  margin-top: 1rem;
  width: 14%;
}


.edit-product-form{
  width: 50%;
}

</style>