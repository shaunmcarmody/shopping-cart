<template>
  <section class="product-details">
    <Header title="Shopping Cart"/>
    <Product
      v-for="product in basket"
      :key="product.id"
      v-bind:id="product.id"
      v-bind:title="product.title"
      v-bind:image="product.image"
      v-bind:price="product.price"
      v-bind:quantity="product.quantity"
      v-bind:totalPrice="product.totalPrice"
    />
    <button
      v-if="basket.length > 0"
      v-on:click="emptyBasket()"
      class="clear-all"
    >Clear Shopping Cart</button>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Header from './Header.vue'
import Product from './Product.vue'

export default {
  name: 'ProductDetails',
  components: {
    Header,
    Product
  },
  computed: {
    ...mapGetters(['basket'])
  },
  methods: {
    ...mapMutations(['emptyBasket'])
  }
}
</script>

<style scoped>
.product-details {
  flex: 1;
  padding: 40px 32px 40px 56px;
  overflow-y: auto;
}

.clear-all {
  margin-top: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 200px;
  border-radius: 4px;
  color: #7350ff;
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  cursor: pointer;
}
</style>