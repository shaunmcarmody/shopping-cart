<template>
  <div class="item-quantity">
    <button class="adjust">-</button>
    <div class="quantity">{{ quantity }}</div>
    <button class="adjust">+</button>
  </div>
</template>

<script>
export default {
  name: 'ProductQuantity',
  props: {
    quantity: Number
  }
}
</script>

<style scoped>
.item-quantity {
  width: 20%;
}
.adjust {
  background: transparent;
  border: none;
  color: #7350ff;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
  line-height: 25px;
  padding: 0 8px;
}
.quantity {
  display: inline;
  line-height: 25px;
}
</style>