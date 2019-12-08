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
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  margin: auto;
  margin-top: 60px;
  max-width: 1088px;
  max-height: 648px;
  width: calc(100% - 64px);
}

</style>