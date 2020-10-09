
<template>
    <form class="profile-form">
        <div class="profile-container">
        <h1>Hesap Ayarları</h1>
        <div class="profile-form-group">
            <label for="exampleInputName1"> İsim </label>
            <input type="name" v-model="form.name" class="form-control" id="exampleInputName1"  placeholder="İsim">
        </div>
        <div class="profile-form-group">
            <label for="exampleInputEmail1"> Email adresi </label>
            <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1"  placeholder="Email">


        </div>
        <div class="profile-form-group">
            <label for="exampleInputPassword1"> Şifre </label>
            <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1" placeholder="Şifre">

        </div>
        <div class="profile-form-group">
            <label for="exampleInputPassword2"> Şifre Tekrar </label>
            <input type="password" v-model="form.re_password" class="form-control" id="exampleInputPassword2"  placeholder="Şifre Tekrar">
            <router-link class="change_pass" to="/user/changePassword"> Şifreyi değiştir</router-link>
        </div>

        <button type="submit" class="login btn btn-primary" @click.prevent="userSettings">Değişiklikleri Onayla</button>
        </div>
    </form>

</template>


<script>
export default {
    props:{
        user: {
            type: String
        }
    },
    data(){
        return{
            form:{
                name: this.user.name,
                email: this.user.email,
                password: '',
                re_password: ''
            }
        }
    },
    methods:{
        async userSettings(){

            try{    

             const res = await this.$store.dispatch('changeProfile', this.form)
             this.$store.state.user = res.data
             alert('Hesabınızda yaptığınız değişiklikler kaydedildi')
                
            }catch(e){
                console.log('Bu email zaten kullanılmakta ! ',e)
            }
            
        }
    }
}
</script>

<style>

.profile-form{
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: .3rem rgb(59, 111, 18, 0.7) solid;
  border-radius: 6px;
  border-style: outset;
  width: 40%;
  padding: 2% 1%;
}
.profile-form-group{
  width: 90%;
  margin-bottom: 1rem;
}

.change_pass{
    padding: 1rem;
    color:red;
    float: left;
}

.change_pass:hover{
    color:red;
}
</style>