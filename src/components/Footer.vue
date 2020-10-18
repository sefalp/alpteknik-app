<template>
        <footer >

            <div class="footer">
  <div  class="live-communication-icons">

    
                <div class="communication">
                    <router-link to="/user/communication_page" class="live-communication-link">
                    <h2 class="commun-icons" >İletişim</h2>
                    </router-link>
                </div>

                <div class="live-communication">
                    <router-link  to="/" class="live-communication-link">
                    <h2 @click="slideMessageBox" class="commun-icons"><i class="fas fa-headset"></i>CanlıDestek </h2>
                    </router-link>
                </div>

            </div>

        <div class="msg-box-container">
            <div class="message-page">

                <div class="message-index">

                    <div class="messages">

                        <div class="msg-page">

                            <div class="received-chat">

                                   <div class="recived-msg">
                                    <div class="recived-msg-inbox">
                                        <p>Malesef canlı destek hattımız henüz açılmamıştır. İletişim linki üzerinden mesaj bırakabilirsiniz</p>
                                        <span class="time">{{ new Date().toLocaleDateString(`${i18n.locale}`, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}</span>
                                    </div>
                                </div>

                            </div>

                            <div style="visibility:hidden;">

                                 <div class="recived-chat">

                                <div class="recived-msg">
                                    <div class="recived-msg-inbox">
                                        <p>Hi..!! this is messsage from Maxwell what are you doing...</p>
                                        <span class="time">11:01 PM | October 11</span>
                                    </div>
                                </div>

                            </div>
                            <div class="outgoing-chat">
                                
                                    <div class="outgoing-chat-msg">
                                        <p>Hii !! this is messsage from Catherine I'm fine  what about you...</p>
                                        <span class="time">11:03 PM | October 11</span>
                                    </div>
                                
                                <div class="outgoing-chat-img">
                                    <img class="msg-box" src="profile.jpg" alt="">
                                </div>
                            </div>
                            <div class="recived-chat">
                                <div class="recived-chat-img">
                                    <img class="msg-box" src="profile3.jpg" alt="">
                                </div>
                                <div class="recived-msg">
                                    <div class="recived-msg-inbox">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos cumque fuga, quidem commodi magni quas culpa repellendus a delectus?</p>
                                        <span class="time">11:07 PM | October 11</span>
                                    </div>
                                </div>
                            </div>
                            <div class="outgoing-chat">
                                
                                    <div class="outgoing-chat-msg">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus quas eos eaque in quo illo facilis odit inventore ea.</p>
                                        <span class="time">{{ new Date().toLocaleDateString(`${i18n.locale}`, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}</span>
                                    </div>
  
                            </div>

                            </div>

                           
                        </div>
                </div>

            <div class="msg-bottom">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="mesaj bırak.....">
                    <div class="input-group-append">
                        <span class="input-group-text">
                            <i class="fa fa-paper-plane"></i>  
                        </span>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

            </div>
         

            </div>

          
        </footer>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{
            i18n: {"locale": 'tr-TR'}
        }
    },
    methods:{
        slideMessageBox(){

            //const burger = document.querySelector('.burger')
            const navi = document.querySelector('.msg-box-container')
            
            function boxSlide(){

                navi.classList.toggle('msg-box-active');

            }

            boxSlide();

        }
        
    }
}

/*new Date(‘11.19.2018’).toLocaleDateString(‘tr-TR’, { month: ‘long’})*/

</script>

<style>

.footer{
    position: fixed;

}


.live-communication-icons{

    grid-area: footer;
    font-size: 1.5rem;
    color: white;
    background-color: rgb(21, 136, 136);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0px;
    height: 3.5rem;
    padding: 0 15rem;
    padding-top: .4rem; 
    z-index: 2;
}

.live-communication-logo{
    width: 45px;
}

.live-communication-link{
    text-decoration: none;
    color: white
}

.live-communication-link:hover{
    text-decoration: none;
    color: #f0fd00;
}
.live-communication-link:focus{
    text-decoration: none;
    color: white
}

/* msg box container */

.msg-box-container{
    position: fixed;
    display: block;
    bottom: 0px;
    right: 0px;
    font-family: sans-serif;
    letter-spacing: 0.5px;
    transform: translateY(100%);
    transition: transform 0.5s ease-in;
    z-index: 1;
}

.msg-box-active{
    transform: translateY(0%);
}

img.msg-box{
    max-width: 40px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.message-page{
    padding: 0 0 3.5rem 0;
    width: 40rem;
    margin-top: -7px;
}
.message-index{
    border-right: 5px solid rgb(92, 189, 124, 0.8);
    border-left: 5px solid rgb(92, 189, 124, 0.8);
    border-top: 5px solid rgb(92, 189, 124, 0.8);
    overflow: hidden;
}
.messages{
    background-color: white;
    padding: 20px 0 0 0;
    height: 30rem;
}
.msg-page{
    height: 25rem;
    overflow-y: auto;
}
.recived-chat-img{
    display: inline-block;
    width: 10px;
    /* float: left; */
}
.recived-msg{
    display: inline-block;
    padding: 0 0 0 30px;
    vertical-align: top;
    width: 92%;
}
.recived-msg-inbox{
    width:57%;

}
.recived-msg-inbox p{
    background: #FFEFD5 none repeat scroll 0 0;
    border-radius: 10px;
    color: #646464;
    font-size: 14px;
    margin: 0;
    padding: 5px 10px 5px 12px;
    width: 100%;
}
.time{
    color: #777;
    display: block;
    font-size: 9px;
    margin: 8px 0 0;
}
.outgoing-chat{
    overflow: hidden;
    margin: 26px 20px;
}
.outgoing-chat-msg p{
    background: #32CD32 none repeat scroll 0 0;
    color: #fff;
    border-radius: 10px;
    font-size: 14px;
    margin: 0;
    padding: 5px 10px 5px 12px;
    width: 100%;
}
.outgoing-chat-msg{
    float: left;
    width: 56%;
    margin-left: 35%;
}
.outgoing-chat-img{
    display: inline-block;
    width: 40px;
    float: right;
}
.msg-bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: rgb(92, 189, 124, 0.8);
}
.input-group{
    outline: none !important;
    border-radius: 20px;
    width: 90% !important;
    background: #fff;
}
.form-control{
    border: none !important;
    border-radius: 20px !important;
}
.input-group-text{
    background: transparent !important;
    border: none !important;
    cursor: pointer;
    
}
.input-group .fa{
    color: #9ACD32;
    float: right;
}
.bottom-icons{
    float: left;
    margin-top: 28px;
    width: 30% !important;
    margin-left: 30px;
    font-size: 20px;
    cursor: pointer;
}
.bottom-icons .fa{
    color: #fff;
    padding: 5px;
}
.form-control:focus{
    border-color: none !important;
    box-shadow: none !important;
    border-radius: 20px;
}

@media (max-width: 1200px) {
.live-communication-icons{

    grid-area: footer;
    font-size: 1.2rem;
    color: white;
    background-color: rgb(21, 136, 136);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0px;
    height: 2.7rem;
    padding: 0 15rem;
    padding-top: .7rem; 
}
.live-communication-logo{
    width: 45px;
}

.live-communication-link{
    text-decoration: none;
    color: white
}

.live-communication-link:hover{
    text-decoration: none;
    color: #f0fd00;
}
.live-communication-link:focus{
    text-decoration: none;
    color: white
}

.commun-icons{
    font-size: 1.8rem;
}

}
</style>