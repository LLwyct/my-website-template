<template>
<div>
    <v-alert style="height:30px;" v-bind:class="{hidden: !isShow}" v-bind="{value: true, color: infoType}">{{this.error}}</v-alert>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 md6 lg4>
          <panel paneltitle="登录">
            <v-text-field type="email" v-model="email" placeholder="email"></v-text-field>
            <v-text-field type="password" v-model="password" placeholder="password"></v-text-field>
             <v-btn color="primary" @click="login">登录</v-btn>
          </panel>
        </v-flex>
      </v-layout>
    </v-container>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
import panel from './Panel'
export default {
  name: 'HelloWorld',
  components: {
    panel
  },
  data () {
    return {
      email: '',
      password: '',
      infoType: 'success',
      isShow: false,
      error: null
    }
  },
  methods: {
    async login () {
      if (!this.email || !this.password) {
        this.infoType = 'warning'
        this.error = '请完整填写信息'
      } else {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.infoType = 'success'
          this.error = '登录成功'
        } catch (error) {
          this.error = error.response.data.error
          this.infoType = 'error'
        }
      }
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.class {
  color: red;
}
.hidden {
  visibility: hidden;
}
</style>
