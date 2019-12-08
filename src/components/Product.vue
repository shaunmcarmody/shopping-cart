<template>
  <div class="product">
    <ProductInfo
      v-bind:image="image"
      v-bind:title="title"
      v-bind:id="id"
    />
    <ProductQuantity
      v-bind:quantity="quantity"
    />
    <!-- Price per unit -->
    <Price
      v-bind:price="price"    
    />
    <!-- Cummulative Price -->
    <Price
      v-bind:price="price"
    />
  </div>
</template>

<script>
import Price from './Price.vue'
import ProductInfo from './ProductInfo.vue'
import ProductQuantity from './ProductQuantity.vue'

export default {
  name: 'Product',
  components: {
    Price,
    ProductInfo,
    ProductQuantity
  },
  props: {
    id: String,
    image: String,
    price: Number,
    quantity: Number,
    title: String,
    totalPrice: Number
  }
}
</script>

<style scoped>
.product {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
</style>