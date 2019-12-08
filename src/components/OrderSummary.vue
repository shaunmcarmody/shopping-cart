<template>
  <aside class="summary">
    <ShoppingCartHeader title="Order Summary"/>
  </aside>
</template>

<script>
import ShoppingCartHeader from './ShoppingCartHeader.vue'

export default {
  name: 'ShoppingCart',
  components: {
    ShoppingCartHeader,
  }
}
</script>

<style scoped>
.summary {
  padding: 40px 32px;
  width: 312px;
  background-color: #f3f3f3;
  color: #212240;
}
</style>