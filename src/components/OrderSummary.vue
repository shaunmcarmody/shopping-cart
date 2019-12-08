<template>
  <aside class="summary">
    <Header title="Order Summary" />
    <SummaryOverview />
    <Discounts />
    <Confirmation />
  </aside>
</template>

<script>
import Confirmation from './Confirmation.vue'
import Discounts from './Discounts.vue'
import Header from './Header.vue'
import SummaryOverview from './SummaryOverview.vue'

export default {
  name: 'ShoppingCart',
  components: {
    Header,
    SummaryOverview,
    Discounts,
    Confirmation
  }
}
</script>

<style scoped>
.summary {
  border-radius: 4px;
  padding: 40px 32px;
  width: 312px;
  background-color: #f3f3f3;
  color: #212240;
}
</style>