<template>
   <header class="header"> 

            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>

            <div class="brand">
                <a href="/"> Alp Teknik Hırdavat </a>
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
                        <a class="user-entrance" href="/">Giriş Yap</a>
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
    }
}
</script>

<style>
.btn.btn-secondary{
    background-color: rgb(255, 181, 43);
    height: 3.5rem;
    width: 10rem;
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 10px;
    color: rgb(20, 102, 255)
}
.btn.btn-secondary:hover{
    background-color: orangered ;
}
</style>