<template>
  <div class="footer">
    <h1>Footer</h1>
    <p>{{ warding }}</p>
    <a :href="link">Google.com</a>
  </div>
</template>
<script>
export default {
  name: 'compoentFooter',
  props: {
    warding: {
      type: String,
      default: 'ABCDE',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.footer {
  background: red;
  color: tan;
  width: 100%;
  text-align: center;
}
</style>
