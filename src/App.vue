<template>
  <v-app>
    <Navbar @wardingEmit="wardingEmit" />
    <p>{{ warding }}</p>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  },

  data: () => ({
    //
    warding: '',
  }),
  methods: {
    wardingEmit(e) {
      console.log(e)
      this.warding = e
    },
  },
}
</script>
