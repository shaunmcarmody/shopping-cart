<template>
  <ProductInfo
    v-bind:image="image"
  />
</template>

<script>
import ProductInfo from './ProductInfo.vue'

export default {
  name: 'Product',
  components: {
    ProductInfo
  },
  props: {
    id: String,
    image: String,
    price: Number,
    quantity: Number,
    title: String,
  }
}
</script>