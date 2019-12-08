<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped>
h1 {
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
  font-size: 1.3rem;
  padding-bottom: 16px;
}
</style>