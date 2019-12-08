<template>
  <section class="cross-promotion">
    <Header title="Recently viewed" />
    <div class="promoted-items">
      <ItemPreview
        v-for="product in SKU"
        :key="product.id"
        v-bind:id="product.id"
        v-bind:title="product.title"
        v-bind:image="product.image"
        v-bind:price="product.price" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Header from './Header.vue'
import ItemPreview from './ItemPreview.vue'

export default {
  name: 'CrossPromotion',
  components: {
    Header,
    ItemPreview
  },
  computed: {
    ...mapState(['SKU']),
  }
}
</script>

<style scoped>
.cross-promotion {
  border-radius: 4px;
  background-color: #ffffff;
  overflow-x: auto;
  margin: auto;
  margin-top: 20px;
  max-width: 1088px;
  max-height: 648px;
  padding: 40px 32px 40px 56px;
  width: calc(100% - 64px);
}

.promoted-items {
  display: flex;
  justify-content: space-between;
}
</style>