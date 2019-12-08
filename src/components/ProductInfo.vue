<template>
  <div>
    <img :src="image" :alt="title" class="item-image" />
    <div>
      <h1></h1>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    id: String,
    image: String,
    price: Number,
    quantity: Number,
    title: String,
  }
}
</script>