<template>
<div>
    <v-alert :value="errorType === 2" type="success"  transition="slide-y-transition">登录成功</v-alert>
    <v-alert :value="errorType === 1" type="warning" transition="slide-y-transition">{{this.error}}</v-alert>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex md6>
          <div class="white elevation-2" column>
            <v-toolbar flat>
              <v-toolbar-title>登录</v-toolbar-title>
            </v-toolbar>
            <v-layout column class="pl-4 pr-4 pt-2 pb-2">
              <v-text-field type="email" v-model="email" placeholder="email"></v-text-field>
              <v-text-field type="password" v-model="password" placeholder="password"></v-text-field>
              <v-btn color="primary" @click="login">登录</v-btn>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      errorType: 0,
      error: null
    }
  },
  methods: {
    async login () {
      if (!this.email || !this.password) {
        this.errorType = 1
        this.error = '请完整填写信息'
      } else {
        try {
          await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.errorType = 2
          this.error = null
        } catch (error) {
          this.error = error.response.data.error
          this.errorType = 1
        }
      }
      setTimeout(() => {
        this.errorType = 0
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
</style>
