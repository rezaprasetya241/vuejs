<template>
  <div>
    <h1>Count {{ count }}</h1>
    <h1 v-if="show == true">{{ warding }}</h1>
    <v-btn color="primary" @click="tambah">+</v-btn>
    <v-btn color="info" @click="pengurangan">-</v-btn>
    <v-btn color="info" @click="reset">reset</v-btn>

    <hr />

    <v-btn color="info" @click="increment">+</v-btn>
    <hr />
    <v-btn color="info" @click="wardingFooter">show warding</v-btn>
    <Footer warding="footer tester" :link="'https://google.com'" />
  </div>
</template>
<script>
import Footer from '../components/footer.vue'
export default {
  name: 'aboutView',
  components: {
    Footer,
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    warding() {
      return this.$store.state.moduleAbout.warding
    },
    show() {
      return this.$store.state.moduleAbout.show
    },
  },
  methods: {
    tambah() {
      this.$store.dispatch('tambah')
    },
    pengurangan() {
      this.$store.dispatch('kurang')
    },
    reset() {
      this.$store.dispatch('reset')
    },
    increment() {
      this.$store.dispatch('increment', this.count + 10)
    },

    wardingFooter() {
      this.$store.dispatch('moduleAbout/wardingFooter', this.show)
    },
  },
}
</script>
