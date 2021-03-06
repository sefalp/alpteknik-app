import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({

    state:{
        data:[],
        minicartData:[],
        totalMinicartPrice : 0
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
            axios.post('http://localhost:5000/delete_product', item)
            .then(res => console.log(res))
        },

        MINICART_ADD(state, item){
            let product = state.data.filter((prod)=>{  return item === prod })
            let prod = state.minicartData.filter( (item) => {
                return item.name === product[0].name
            }) 
            if(prod.length === 0){
                 state.minicartData.push({
                    ...product[0],
                    quantity: 1
                })
            }else{
                prod[0].quantity = prod[0].quantity + 1 

            }      
        },

        SET_PRODUCTS(state, res){
            state.data = res.data
        },

        GET_TOTAL_PRICE(state){
            let totalPrice = 0
            var item;
            for (item in state.minicartData){
                totalPrice = totalPrice + state.minicartData[item].price * state.minicartData[item].quantity
            }
            state.totalMinicartPrice = totalPrice
        },

        DELETE_FROM_MINICART(state, item){
            if(item.quantity > 1){
                item.quantity = item.quantity - 1; 
            }else if(item.quantity === 1){
                state.minicartData = state.minicartData.filter( prod => item !== prod)
            }
            state.totalMinicartPrice = state.totalMinicartPrice - item.price
           
        },

        ADD_NEW_PRODUCT_DB(state,item){
            axios.post('http://localhost:5000/product_send_to_database', item)
            .then( res => console.log(res.data) )
            
        },
        EDIT_PRODUCT(state,item){
            axios.patch('http://localhost:5000/edit_product', item)
            .then( res => console.log(res.data))
        }

    },


    getters:{
        dataAtTheMoment: state =>{
            return state.data
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

        getTotalPrice({commit}){
            commit('GET_TOTAL_PRICE')
        },

        deleteFromMinicart({commit}, item){
            commit('DELETE_FROM_MINICART', item)
        },

        addNewProductDB({commit}, item){
            commit('ADD_NEW_PRODUCT_DB', item)
        },

        editProduct({commit}, item){
            commit('EDIT_PRODUCT', item)
        }
    }
})