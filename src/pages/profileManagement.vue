
<template>
    <form class="profile-form">
        <div class="profile-container">
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
.profile-container{
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-form-group{
  width: 30%;
  margin-bottom: 1.2rem;
}

.prolife.btn.btn-primary{
    width: 12%;
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