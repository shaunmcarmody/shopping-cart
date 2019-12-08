<template>
  <section class="cross-promotion">
    <Header title="Customers also bought" />
  </section>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'CrossPromotion',
  components: {
    Header
  }
}
</script>

<style scoped>
.cross-promotion {
  bottom: 10%;
  margin-top: 60px;
  max-width: 1088px;
  max-height: 648px;
  width: calc(100% - 64px);
  border-radius: 4px;
  background-color: #ffffff;
}

</style>