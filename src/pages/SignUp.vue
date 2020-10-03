<template>
   <form class="signup-form">
        <div class="signup-container">
        <div class="signup-form-group">
            <label for="exampleInputEmail1">Kullanıcı Adı</label>
            <input v-model="form.name" type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="signup-form-group">
            <label for="exampleInputEmail1">Email adresi</label>
            <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="signup-form-group">
            <label for="exampleInputEmail1">Şifre</label>
            <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Şifre">
        </div>
                <div class="signup-form-group">
            <label for="exampleInputEmail2">Şifre Tekrarı</label>
            <input type="password" v-model="form.passwordAgain" class="form-control" id="exampleInputPassword2" aria-describedby="passwordHelp2" placeholder="Şifre Tekrarı">
            <small id="emailHelp" class="form-text text-muted">Bilgileriniz kimseyle paylaşılmayacaktır.</small>
        </div>
        <div class="signup-form-group form-check">
            <input type="checkbox" v-model="form.checked" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Sözleşmeyi okudum ve kabul ediyorum.</label>
        </div>
        
        <button @click.prevent="createNewUser" type="submit" class="signup btn btn-primary">Üye Ol</button>
        </div>
    </form>
</template>

<script>
export default {
  data(){
    return{
      form:{
        name:'',
        email:'',
        password:'',
        passwordAgain:'',
        checked: false
      }
    }
  },
  methods:{
      createNewUser(){
        this.$store.dispatch('createNewUser', this.form)
      }
      }
    
}
</script>

<style>
.signup-container{
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup-form-group{
  width: 30%;
  margin-bottom: 1.2rem;
}


.signup.btn.btn-primary{
    width: 12%;
}


.sigup-form-group .form-check{
  display: flex;
  align-items: center;
  justify-content: center;
}

.sigup-form-group .form-check-label{
  margin-left: .3rem;
}

</style>