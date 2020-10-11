<template>
   <header class="header"> 

            <div class="burger" @click="slideCategories">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>

            <div class="brand">
                 <router-link to="/" class="user-entrance-route">
                <a href="/"> ALP TEKNİK HIRDAVAT </a>
                 </router-link>
            </div>
                <div class="costumer-service">

                    <div class="dropdown open">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                    Sepetim
                         </button>
                        <div>
                            <Minicart @click="$event.stopPropagation()"/>
                        </div>
                    </div>
                    <div>
                        <div v-if="user.name === 'Ziyaretçi'">
                                <router-link to="/user/login" class="user-entrance-route">
                                <a class="user-entrance" href="/">Giriş Yap</a>
                                </router-link>
                        </div>
                        <div v-else>
                            <nav>
                                <div class="dropdown-bla">
                                    <div class="projects">
                                        <button id="but" class="user-entrance" >Hesabım</button>
                                        <ul>
                                            <li><button  style="font-size: 1.5rem"  @click="$router.push({name:'profile_management', params: {user: user }})">Hesap Ayarları</button></li>
                                            <li v-if="user.isAdmin">
                                                <button  style="font-size: 1.5rem" @click="$router.push({name:'add-new-product'})">
                                                    Ürün Ekle
                                                    </button>
                                                    </li>
                                            <li><button  @click="logout" style="font-size: 1.5rem">Çıkış</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        
                    </div>
                </div>
             
        </header>
</template>

<script>

import Minicart from './MiniCart'

export default {
    name: 'Header',
    components:{
        Minicart
    },
    computed:{
    user(){
        return this.$store.state.user
    }
    },
    methods:{
        async logout(){
            try{
                 await this.$store.dispatch('pushMinicartToDatabase')
                 await this.$store.dispatch('logoutUser')
                 this.$router.push({name: 'home'})
            }
           catch(e){
               console.log(e)
           }
     
        },
        slideCategories(){

            const burger = document.querySelector('.burger')
            const navi = document.querySelector('.navLinks')
            const navLinks = document.querySelectorAll('.navLinks li')
            
            function navslide(){

                navi.classList.toggle('nav-active');

                navLinks.forEach((link, index) => {
                
                    if(link.style.animation){
                        link.style.animation = ''
            
                    }
                    else{
                        link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.5}s`;
                    }
                })
                burger.classList.toggle('toggle');
            }

            navslide();

        }
    }
}



</script>

<style>


.header{
    font-family: 'Ubuntu', sans-serif;
    grid-area: header;
    position: fixed;
    width: 100%;
    height: 4rem;
    background-color:  rgb(30, 85, 78);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 2rem;

}

.burger{
    border: .1rem rgb(255, 255, 255) solid;
    cursor: pointer;
}

.burger div{
    width: 25px;
    height: 0.16rem;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease;
}


.brand{
    flex: 1 1 50%;
}

.brand a{
    color: white;
    text-decoration: none;
    font-size: 2.8rem;
    padding-left: 6rem;
}

.brand a:hover{
    color: #ff8000;
    text-decoration: none;
}

.costumer-service{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2 2 35%;
}

.costumer-service .user-entrance{
    color: white;
    text-decoration: none;
    font-size: 2rem;
    padding-right: 2rem;
    padding-left: 1.3rem;
}
.costumer-service .user-entrance:hover{
    color: #ff8000;
    text-decoration: none;
}

    

.btn.btn-secondary{
    background-color: rgb(255, 181, 43);
    height: 3rem;
    width: 10rem;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 10px;
    color: rgb(20, 102, 255)
}
.btn.btn-secondary:hover{
    background-color: orangered ;
}


.user-entrance-route:hover{
    text-decoration: none;
}
a {
  text-decoration: none;
}

.dropdown-bla{
    height: 10vh;
    background-color: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.projects{
  position: relative;
}

.projects li{
    background-color: rgb(61, 167, 153);
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.projects li:hover{
        background-color: rgb(213, 221, 50);
}

.projects li a:hover{
        color:  rgb(36, 124, 28);
        text-decoration: none;
}

.projects ul{
    position: absolute;
    list-style: none;
    background-color:wheat;
    margin-top: 6px;
    width: 130px;
    right: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    transition: all 0.4s ease;
    visibility: hidden;
  
}


.dropdown-bla .projects button{
    background: none;
    border: none;    
    color: white;
    font-size: 18px;
    cursor: pointer;
}

.dropdown-bla button:hover{
    color: rgb(252, 108, 30);
}

.projects button:focus + ul{
     opacity: 1;
     visibility: visible;
}

.projects button:focus{
     outline: none;
     box-shadow: none;
}

</style>