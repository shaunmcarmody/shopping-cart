<template>
  <div class="item">
    <div class="item-preview">
      <img :src="image" :alt="title" class="item-image" />
      <h1 class="item-title">{{ title }}</h1>
    </div>
    <p class="item-price">€{{ price }}</p>
    <button
      v-on:click="addProduct(id)"
      class="item-purchase"
    >Buy</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ItemPreview',
  props: {
    id: String,
    image: String,
    price: Number,
    title: String,
  },
  methods: {
    ...mapMutations(['addProduct'])
  }
}
</script>

<style scoped>
.item {
  margin-top: 24px;
  position: relative;
  width: 120px;
}
.item-image {
  display: block;
  margin: auto;
  max-height: 60px;
}
.item-preview {
  height: 110px;
}
.item-price {
  text-align: center;
}
.item-title {
  overflow-wrap: break-word;
  font-size: 0.9rem;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  width: 90%;
}
.item-purchase {
  border-radius: 4px;
  background: #7350ff;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-size: 0.8rem;
  font-weight: bold;
  margin: auto;
  padding: 8px 12px;
}

</style>