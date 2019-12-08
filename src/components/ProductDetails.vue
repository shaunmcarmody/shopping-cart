<template>
  <section class="product-details">
    <ShoppingCartHeader title="Shopping Cart"/>
  </section>
</template>

<script>
import ShoppingCartHeader from './ShoppingCartHeader.vue'

export default {
  name: 'ProductDetails',
  components: {
    ShoppingCartHeader,
  }
}
</script>

<style scoped>
.product-details {
  flex: 1;
  padding: 40px 32px 40px 56px;
}
</style>