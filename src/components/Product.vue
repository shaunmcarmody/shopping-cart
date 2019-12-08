<template>
  <div class="product">
    <ProductInfo
      v-bind:image="image"
      v-bind:title="title"
      v-bind:id="id"
    />
    <ProductQuantity
      v-bind:quantity="quantity"
      v-bind:id="id"
    />
    <!-- Price per unit -->
    <Price
      v-bind:price="price"    
    />
    <!-- Cummulative Price -->
    <Price
      v-bind:price="totalPrice"
    />
    <button
      v-on:click="deleteProduct(id)"
      class="remove-product"
    >x</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

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
  },
  methods: {
    ...mapMutations(['deleteProduct'])
  }
}
</script>

<style scoped>
.product {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.remove-product {
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
</style>