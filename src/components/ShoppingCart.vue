<template>
  <main class="shopping-cart">
    <ProductDetails />
    <OrderSummary />
  </main>
</template>

<script>
import ProductDetails from './ProductDetails.vue'
import OrderSummary from './OrderSummary.vue'

export default {
  name: 'ShoppingCart',
  components: {
    ProductDetails,
    OrderSummary
  }
}
</script>

<style scoped>
.shopping-cart {
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1088px;
  max-height: 648px;
  border-radius: 4px;
  background-color: #ffffff;
}

</style>