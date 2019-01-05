<template>
  <div id="app">
  <v-app>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </v-app>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, '微软雅黑',;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.application--wrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
