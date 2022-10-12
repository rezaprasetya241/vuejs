<template>
  <div class="navbar pa-6">
    <div class="navbar-logo">
      <img src="../assets/uad.png" />
      <div>
        <h3>Universitas Ahmad Dahlan</h3>
        <p>Unit Kegiatan Mahasiswa</p>
      </div>
    </div>
    <div class="navbar-link">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">Profile</router-link></li>
        <li><router-link to="/">News</router-link></li>
        <li><router-link to="/">Sign In</router-link></li>
      </ul>
    </div>
    <!-- <v-btn @click="belajarEmit">emit</v-btn>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/about">Profile</router-link>
    <router-link to="/about">News</router-link>
    <router-link to="/about">Sign In</router-link>
    <a href="/form">Form</a> -->
  </div>
</template>
<script>
export default {
  name: 'componentNavbar',
  methods: {
    belajarEmit() {
      this.$emit('wardingEmit', 'Warding Emit')
    },
  },
}
</script>
<style scoped>
.navbar {
  /* width: 100%; */
  background: #084a79;
  display: flex;
  justify-content: space-between;
  color: white;
}
.navbar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-logo img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.navbar-link ul {
  display: flex;
  height: 100%;
  align-items: center;
  list-style: none;
  /* background: tan; */
}
.navbar-link ul li,
.navbar-link ul li a {
  text-decoration: none;
  color: white;
}
.navbar a {
  margin: 10px;
}
</style>
