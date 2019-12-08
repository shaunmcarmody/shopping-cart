<template>
  <aside class="summary">
    <Header title="Order Summary" />
  </aside>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'ShoppingCart',
  components: {
    Header
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