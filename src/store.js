import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({

    state:{
        data:[],
        totalMinicartPrice : 0,
        userToken: null,
        user : {
            name: 'Ziyaretçi',
            isAdmin: false,
            minicart:[]
        }
    },
    mutations:{
        NEW_PRODUCT(state, item){
            state.data.push({
                name: item.name,
                image: item.image,
                brand: item.brand,
                price: item.price
            })
        },
        DELETE_PRODUCT(state, item){
            axios.post('http://localhost:5000/product/delete', item)
            .then(res => console.log(res))
        },

        MINICART_ADD(state, item){
            let product = state.data.filter((prod)=>{  return item === prod })
            let prod = state.user.minicart.filter( (item) => {
                return item.name === product[0].name
            }) 
            if(prod.length === 0){

                const miniObject = ({
                    ...product[0],
                    quantity: 1
                     })

                state.user.minicart.push(miniObject)

            }else{
                prod[0].quantity = prod[0].quantity + 1 
            }

            if(state.user.name !== 'Ziyaretçi')
            {
                const cart = state.user.minicart

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + state.userToken
                } 
            
              console.log(state.user.minicart)
               
              axios.post('http://localhost:5000/product/update_minicart', cart, {
                  headers: headers
              })
              .then( res => console.log(res.data))
            }
            
        },

        SET_PRODUCTS(state, res){
            state.data = res.data
        },

        DELETE_FROM_MINICART(state, item){
            if(item.quantity > 1){
                item.quantity = item.quantity - 1; 
            }else if(item.quantity === 1){
                state.user.minicart = state.user.minicart.filter( prod => item !== prod)
            }
            state.totalMinicartPrice = state.totalMinicartPrice - item.price

            if(state.user.name !== 'Ziyaretçi')
            {
                const cart = state.user.minicart

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + state.userToken
                } 
            
              console.log(state.user.minicart)
               
              axios.post('http://localhost:5000/product/update_minicart', cart, {
                  headers: headers
              })
              .then( res => console.log(res.data))
            }

            
           
        },

        ADD_NEW_PRODUCT_DB(state,item){
            axios.post('http://localhost:5000/product_send_to_database', item)
            .then( res => console.log(res.data))
        }
        ,

        EDIT_PRODUCT(state,item){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + state.userToken
            } 

            axios.patch('http://localhost:5000/product/edit', item, {headers: headers})
            .then( res => console.log(res.data))
        },

        LOGIN_USER(state, form){
          axios.post('http://localhost:5000/user/login', form)
            .then(( res ) => {

                state.userToken = res.data.token
                state.user = res.data.user

                console.log(state.user)

                return state.user

            })
            
        },

        CREATE_NEW_USER(state, form){
            if(form.password.length >= 6){

            if(form.checked && form.password === form.passwordAgain)
            {
            axios.post('http://localhost:5000/user/create',form)
                .then( ()=> {
                    console.log('new user entered the room!')
                 })
                .catch( (e) => console.log(e))
            }
            else if(form.password !== form.passwordAgain){
                alert('Şifre ile tekrarı uyuşmuyor!')
            }
            else if(!form.checked){
                alert('Sözleşme kabul edilmeden üye olunamaz!')
            }

            }
            else{
                alert(" parola '6' haneden az olmamalı ! ")
            }
           
            
        },

        USER_SETTİNGS(state, form){
            
            console.log('öyylesine USER_SETTING',form)

        }
        ,
        LOGOUT_USER(state){

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + state.userToken
            } 
            axios.get('http://localhost:5000/user/logout',{
                headers: headers
            })
            .then( 
                res => 
                {
                    if(res.data === state.userToken){
                        state.userToken = null,
                        state.user = {
                            name: 'Ziyaretçi',
                            isAdmin: false,
                            minicart:[]
                        }
                        console.log('Kullanıcı çıkış yaptı')
                    }
                    return 'cacakı'
                }
            )
        }

        
    },



    getters:{
        dataAtTheMoment: state =>{
            return state.data
        },

        getUser : state => {
            return state.user
        },

        getPrice: (state) => {
                let totalPrice = 0
                var item;
                for (item in state.user.minicart){
                    totalPrice = totalPrice + state.user.minicart[item].price * state.user.minicart[item].quantity
                }
                return totalPrice
        }


    },




    actions:{
        addNewProduct({commit}, item){
            commit('NEW_PRODUCT', item);
        },

        deleteProduct({commit}, item){
            commit('DELETE_PRODUCT', item)
        },

        addToMiniCart({commit}, item){
            commit('MINICART_ADD', item)
        },

        getProducts({commit}){
            axios.get('http://localhost:5000/')
            .then(res => {
                commit('SET_PRODUCTS', res)
            })
        },

        deleteFromMinicart({commit}, item){
            commit('DELETE_FROM_MINICART', item)
        },

        addNewProductDB({commit}, item){
            commit('ADD_NEW_PRODUCT_DB', item)
        },

        editProduct({commit}, item){
            commit('EDIT_PRODUCT', item)
        },

        createNewUser({commit},form){
            commit('CREATE_NEW_USER',form)
        },

        loginUser({commit}, loginForm){
            commit('LOGIN_USER', loginForm)
        },

        changeProfile({state}, form){
            return new Promise( (resolve, reject) => {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + state.userToken
                } 
    
                axios.post('http://localhost:5000/user/changeProfile', form,{
                    headers: headers
                }).then( 

                    (ans) => resolve(ans)                  
                
                )
                .catch( (e) => reject(e))

            })
        },

        changePassword({state}, form){

            return new Promise( (resolve, reject) => {

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + state.userToken
            } 

            axios.post('http://localhost:5000/user/changePassword', form, {headers: headers})
            .then( (ans) => resolve(ans) )
                .catch( (e) => reject(e))

        })

        },

        logoutUser({commit}){
            commit('LOGOUT_USER')
        }
    }
})