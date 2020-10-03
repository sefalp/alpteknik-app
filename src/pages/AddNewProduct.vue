<template>
    <div class="form-container">
    <b-form class="add-product-form" @submit.prevent="handleSubmit">
      <h1>Ürün Ekleme Formu</h1>
      <b-form-group
        id="name"
        label="Ürünün adı:"
        label-for="input-1"
      >
        <b-form-input
          id="name"
          v-model="form.name"
          type='text'
          required
          placeholder="İsim Giriniz"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="image" label="Ürünün resmi:" label-for="input-2">
        <b-form-input
          id="image"
          v-model="form.image"
          type='text'
          required
          placeholder="Resim (URL) Giriniz"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="brand" label="Ürünün markası:" label-for="input-3">
        <b-form-input
          id="brand"
          v-model="form.brand"
          type='text'
          required
          placeholder="Marka Giriniz"     
        ></b-form-input>
      </b-form-group>

      
      <b-form-group id="price" label="Ürünün fiyatı:" label-for="input-3">
        <b-form-input
          id="price"
          v-model="form.price"
          required
          placeholder="Fiyat Giriniz"     
        ></b-form-input>
      </b-form-group>

        <b-button @click="addNewProductDB" type="submit" variant="primary">Ürünü Ekle</b-button>

     </b-form>
  </div>  
</template>

<script>
export default {
    name: 'AddNewProduct',
    data(){
        return{
            form:{
                name: '',
                image : '',
                brand : '',
                price : null
            }
        }
    },
    methods:{
        addNewProductDB(){
          this.$store.dispatch('addNewProductDB', this.form),
          this.form = {
                name: '',
                image : '',
                brand : '',
                price : null
            }
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


.add-product-form{
  width: 50%;
}


</style>