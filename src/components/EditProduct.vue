<template>
 <div class="form-container">
    <b-form class="edit-product-form" @submit.prevent="handleSubmit">
      <h1>Ürün Düzenleme Formu</h1>
      <b-form-group
        id="name"
        label="Ürünün adı:"
        label-for="input-1"
        class="formGroup"
      >
        <b-form-input
          id="name"
          v-model="item.name"
          type='text'
          required
          placeholder="İsim Giriniz"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="formGroup" id="image" label="Ürünün resmi:" label-for="input-2">
        <b-form-input
          id="image"
          v-model="item.image"
          type='text'
          required
          placeholder="Resim (URL) Giriniz"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="formGroup" id="brand" label="Ürünün markası:" label-for="input-3">
        <b-form-input
          id="brand"
          v-model="item.brand"
          type='text'
          required
          placeholder="Marka Giriniz"     
        ></b-form-input>
      </b-form-group>

      
      <b-form-group class="formGroup" id="price" label="Ürünün fiyatı:" label-for="input-3">
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

.form-container h1{
  margin-bottom: 2rem;
}

.form-container .btn{
  margin-top: 1rem;
  width: 14%;
}

.formGroup{
  width: 90%;
}


.edit-product-form{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: .3rem rgb(59, 111, 18, 0.7) solid;
  border-radius: 6px;
  border-style: outset;
  padding: 2% 1%;
  margin-bottom: 5%;
  width: 50%;
}

</style>