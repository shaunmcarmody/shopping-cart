<template>
  <div id="app">
    <ShoppingCart />
    <CrossPromotion />
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue'
import CrossPromotion from './components/CrossPromotion.vue'

export default {
  name: 'app',
  components: {
    ShoppingCart,
    CrossPromotion
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
