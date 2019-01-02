<template>
<div>
  <v-toolbar flat color="blue" height="64px">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <router-link to="/home" tag="v-toolbar-title" class="home">Outsider</router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-if="!$store.state.isUserLoggedIn">
      <v-btn to="/home" flat replace class="nav-btn">首页</v-btn>
      <v-btn to="/register" flat replace class="nav-btn">注册</v-btn>
      <v-btn to="/login" flat replace class="nav-btn">登录</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down" v-if="$store.state.isUserLoggedIn">
      <v-btn to="/home" flat replace class="nav-btn">首页</v-btn>
      <v-btn @click="logout" flat replace class="nav-btn">注销</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <div class="hidden-md-and-up">
    <v-navigation-drawer v-model="drawer" absolute app>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: darkslateblue;
}
.nav-btn{
  font-size: 18px;
}
</style>
