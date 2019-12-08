<template>
  <div class="confirmation">
    <div class="final-cost">
      <h2>Total Cost</h2>
      <h1>€{{ confirmTotalCost }}</h1>
    </div>
    <button>Checkout</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Confirmation',
  computed: {
    ...mapGetters(['confirmTotalCost'])
  }
}
</script>


<style scoped>
.confirmation {
  margin-top: 150px;
}

.confirmation button {
  margin-top: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  border-radius: 4px;
  background: #7350ff;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  cursor: pointer;
}

.final-cost {
  display: flex;
}

.final-cost h1 {
  font-size: 1.4rem;
}

.final-cost h2 {
  font-size: 1.4rem;
  font-weight: 100;
  flex: 1;
}
</style>