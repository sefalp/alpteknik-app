<template>
   <form class="change-password-form">
       <div class="profile-container">
           <h1>Hesap Ayarları</h1>

        <div class="change-password-form-group">
            <label for="exampleInputPassword1"> Eski Şifre </label>
            <input type="password" v-model="form.old_password" class="form-control" id="exampleInputPassword1" placeholder="Eski Şifre">

        </div>

        <div class="change-password-form-group">
            <label for="exampleInputPassword2"> Yeni Şifre </label>
            <input type="password" v-model="form.new_password" class="form-control" id="exampleInputPassword2"  placeholder="Yeni Şifre">
        </div>

         <div class="change-password-form-group">
            <label for="exampleInputPassword2"> Yeni Şifre Tekrar </label>
            <input type="password" v-model="form.re_new_password" class="form-control" id="exampleInputPassword2"  placeholder="Yeni Şifre Tekrar">
        </div>

        <button type="submit" class="login btn btn-primary" @click.prevent="changePassword">Şifreyi Değiştir</button>
       </div>
    </form>
</template>

<script>
export default {
    data(){
        return{
            form:{
                old_password: '',
                new_password: '',
                re_new_password: ''
            }
        }
    },
    methods:{
        async changePassword(){
            try{
              const res = await this.$store.dispatch('changePassword', this.form)
              alert(res.data)
              await this.$store.dispatch('logoutUser')
              this.$router.push({name: 'login'})
        }catch(e){
                alert(e)
           }
        }
    }
}
</script>

<style>

.change-password-form{
    display: flex;
    justify-content: center;
    align-items: center;
}

.change-password-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: .3rem rgb(59, 111, 18, 0.7) solid;
  border-radius: 6px;
  border-style: outset;
  width: 40%;
  padding: 2% 1%;
}
.change-password-form-group{
  width: 90%;
  margin-bottom: 1.2rem;
}

.change-password.btn.btn-primary{
    width: 12%;
}

</style>