<template>
  <div class="discounts">
    <h3>Discounts</h3>
    <form v-on:submit="applyDiscount">
      <input type="text" class="discount-code" placeholder="Enter discount code" />
      <input type="submit" value="Apply" class="apply-discount">
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Discounts',
  methods: {
    ...mapMutations(['applyDiscount'])
  }
}
</script>

<style scoped>
.discounts h3 {
  font-size: 1rem;
}
.apply-discount {
  border-radius: 4px;
  background: #7350ff;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 10px;
  padding: 8px 12px;
}
</style>