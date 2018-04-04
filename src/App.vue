<template>
  <div id="app">
    <div class="container">
         <appHeader></appHeader>
         <router-view></router-view>  
    </div>
  </div>
</template>

<script>
import appHeader from './components/header'
export default {
  name: 'App',
  components:{
      appHeader
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
}
</style>
