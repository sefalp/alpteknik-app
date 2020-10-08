<template>
    <form class="login-form">
        <div class="login-container">
        <div class="login-form-group">
            <label for="exampleInputEmail1">Email adresi</label>
            <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="login-form-group">
            <label for="exampleInputPassword1">Şifre</label>
            <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Şifre">
            <router-link to="/user/sign-up"> Henüz üye değil misiniz ? </router-link>
        </div>
        <button type="submit" class="login btn btn-primary" @click.prevent="loginUser">Giriş Yap</button>
        </div>
    </form>
</template>

<script>

export default {

    data(){
        return{
            form:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        async loginUser(){
            try{
                await this.$store.dispatch('loginUser', this.form)
                this.$router.push({name: 'home'})
            }
            catch{
                alert('Kullanıcı bilgileri hatalı !')
            }
            
    }
}
}

</script>

<style>

.login-container{
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-form-group{
  width: 30%;
  margin-bottom: 1.2rem;
}


.login.btn.btn-primary{
    width: 12%;
}




</style>