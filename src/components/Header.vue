<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'ShoppingCartHeader',
  props: {
    title: String
  }
}
</script>

<style scoped>
h1 {
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
}
</style>