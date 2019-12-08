<template>
  <div class="item-overview">
    <div class="overview-image">
      <img :src="image" :alt="title" class="item-image" />
    </div>
    <div class="overview-description">
      <h1>{{ title }}</h1>
      <p>Production code: {{ id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    id: String,
    image: String,
    title: String,
  }
}
</script>

<style scoped>
.item-overview {
  align-items: center;
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
}
.item-image {
  display: block;
  margin: auto;
  margin-right: 16px;
  max-width: 70px;
}
.overview-description h1 {
  font-size: 1.2rem;
}

.overview-description p {
  font-size: 0.8rem;
}
</style>