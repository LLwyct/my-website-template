<template>
<div>
  <v-toolbar flat height="64px" color="grey lighten-3">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <router-link to="/home" tag="v-toolbar-title" class="home">Outsider</router-link>
    <v-toolbar-items class="hidden-sm-and-down ml-4" v-if="!$store.state.isUserLoggedIn">
      <v-btn to="/song" flat replace class="nav-btn">Broswer</v-btn>
    </v-toolbar-items>
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
      <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" :to="{path:item.title}">
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
      items: [
        { title: 'home', icon: 'fa-home' },
        { title: 'login', icon: 'fa-sign-in-alt' },
        { title: 'register', icon: 'fa-user-plus' },
        { title: 'logout', icon: 'fa-sign-out-alt' }
      ],
      drawer: null
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
  transition: 0.15s
}
.home:hover {
  color: darkslateblue;
  transform: scale(1.3)
}
.nav-btn{
  font-size: 18px;
}
.side-bar-btn{
  width: 100%;
}
</style>
