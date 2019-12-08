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
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
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
  }
}
</script>

<style scoped>
.product-details {
  flex: 1;
  padding: 40px 32px 40px 56px;
}
</style>