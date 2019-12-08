<template>
  <div class="price">
    <h1>€{{ price }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Price',
  props: {
    price: Number
  }
}
</script>

<style scoped>
.price {
  width: 15%;
}

.price h1 {
  font-size: 1.2rem;
}
</style>