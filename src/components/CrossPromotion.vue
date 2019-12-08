<template>
  <section class="cross-promotion">
    <Header title="Recently viewed" />
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
  border: 1px solid red;
  border-radius: 4px;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
  margin: auto;
  margin-top: 60px;
  max-width: 1088px;
  max-height: 648px;
  padding: 40px 32px 40px 56px;
  width: calc(100% - 64px);
}

</style>