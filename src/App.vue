<template>
  <div id="app">
    <ShoppingCart />
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'app',
  components: {
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212240;
  margin-top: 60px;
}
</style>
