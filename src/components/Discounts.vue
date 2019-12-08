<template>
  <div class="discounts">
    <h3>Discounts</h3>
    <input type="text" class="discount-code" placeholder="Enter discount code" />
    <button>Apply</button>
  </div>
</template>

<script>
export default {
  name: 'Discounts'
}
</script>

<style scoped>
.discounts button {
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