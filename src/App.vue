<template>
  <div id="app">
      <div class="grid-container">    
          <Header/>
            <router-view></router-view>
          <Footer/>
      </div>
  </div>
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


<style>
</style>
