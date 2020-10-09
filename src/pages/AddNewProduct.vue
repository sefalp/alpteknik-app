<template>
    <div class="form-container">
    <b-form class="add-product-form" @submit.prevent="handleSubmit">
      <h1>Ürün Ekleme Formu</h1>
      <b-form-group
        id="name"
        label="Ürünün adı:"
        label-for="input-1"
        class="add-new-inputs"
      >
        <b-form-input
          id="name"
          v-model="form.name"
          type='text'
          required
          placeholder="İsim Giriniz"
          class="add-new-inputs"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="image" label="Ürünün resmi:" label-for="input-2" class="add-new-inputs"> 
        <b-form-input
          id="image"
          v-model="form.image"
          type='text'
          required
          placeholder="Resim (URL) Giriniz"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="brand" label="Ürünün markası:" label-for="input-3" class="add-new-inputs"> 
        <b-form-input
          id="brand"
          v-model="form.brand"
          type='text'
          required
          placeholder="Marka Giriniz"     
        ></b-form-input>
      </b-form-group>

      
      <b-form-group id="price" label="Ürünün fiyatı:" label-for="input-3" class="add-new-inputs"> 
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
        async addNewProductDB(){
          try{

            await this.$store.dispatch('addNewProductDB', this.form)

            this.$router.push({name: 'home'})

            this.form = {
                name: '',
                image : '',
                brand : '',
                price : null
            }

          }catch(e){
              console.log(e)
          }
          
          
        }
    }

}
</script>

<style>

.form-container{
  display: flex;
  align-items: center;
  justify-content: center;
}


.add-product-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: .3rem rgb(59, 111, 18, 0.7) solid;
  border-radius: 6px;
  border-style: outset;
  width: 40%;
  padding: 2% 1%;
  margin-bottom: 5%;
}


.add-new-inputs{
  width: 90%;
}

.form-container .btn.btn-primary{
    width: 90%;
    font-size: 1.3rem;
    font-weight: 500 ;
    background-color: rgb(17, 147, 194)
}




</style>