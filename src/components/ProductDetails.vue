<template>
  <section class="product-details">
    <Header title="Shopping Cart"/>
  </section>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'ProductDetails',
  components: {
    Header,
  }
}
</script>

<style scoped>
.product-details {
  flex: 1;
  padding: 40px 32px 40px 56px;
}
</style>