<template>
  <div>
    <h1>Hello world</h1>
    <v-btn color="primary" @click="tambah">+</v-btn>
    <v-btn color="info" @click="pengurangan">-</v-btn>
    <v-btn color="info" @click="$router.push('/about')">About</v-btn>
    {{ counter }}
  </div>
</template>
<script>
export default {
  name: 'homveView',
  data() {
    return { counter: 0 }
  },
  computed: {},
  mounted() {},
  methods: {
    tambah() {
      this.counter += 1
    },
    pengurangan() {
      this.counter -= 1
    },
  },
}
</script>
