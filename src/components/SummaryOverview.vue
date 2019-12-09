<template>
  <div class="summary-items">
    <h3 class="summary-description">{{ numberOfItems }}</h3>
    <h3>€{{ totalCost }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SummaryOverview',
  props: {},
  computed: {
    ...mapGetters(['numberOfItems', 'totalCost'])
  }
}
</script>

<style scoped>
.summary-items {
  display: flex;
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
  padding-bottom: 20px;
}

.summary-description {
  flex: 1;
}

</style>