<template>
  <aside class="summary">
    <Header title="Order Summary" />
    <SummaryOverview />
  </aside>
</template>

<script>
import Header from './Header.vue'
import SummaryOverview from './SummaryOverview.vue'

export default {
  name: 'ShoppingCart',
  components: {
    Header,
    SummaryOverview
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