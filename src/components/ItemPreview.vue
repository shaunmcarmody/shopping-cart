<template>
  <div>
    <img :src="image" :alt="title" class="preview-image" />
    <h1>{{ title }}</h1>
    <p>{{ price }}</p>
    <button>Buy</button>
  </div>
</template>

<script>
export default {
  name: 'ItemPreview',
  props: {
    id: String,
    image: String,
    price: Number,
    title: String,
  }
}
</script>

<style scoped>
.preview-image {
  max-height: 200px;
}
</style>