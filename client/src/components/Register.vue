<template>
  <div>
      <v-alert style="height:30px;" v-bind:class="{hidden: !isShow}" v-bind="{value: true, color: infoType}">{{this.error}}</v-alert>    <v-container>
      <v-layout align-center justify-center>
        <v-flex md6>
          <div class="white elevation-1" column style="margin-top:-15px;">
            <v-toolbar flat>
              <v-toolbar-title>注册</v-toolbar-title>
            </v-toolbar>
            <v-layout column class="pl-4 pr-4 pt-2 pb-2">
              <form>
              <v-text-field type="email" v-model="email" placeholder="email" autocomplete="off"></v-text-field>
              <v-text-field type="password" v-model="password" placeholder="password" autocomplete="newword"></v-text-field>
              <v-text-field type="password" v-model="repassword" placeholder="repassword" autocomplete="newword"></v-text-field>
              <v-btn color="primary" @click="register">注册</v-btn>
              </form>
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
      repassword: '',
      infoType: 'success',
      isShow: false,
      error: null
    }
  },
  methods: {
    async register () {
      if (!this.password || !this.repassword || !this.email) {
        this.infoType = 'warning'
        this.error = '请完整填写信息'
      } else if (this.password !== this.repassword) {
        this.error = '两次输入的密码不一致'
        this.infoType = 'warning'
      } else {
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.error = '注册成功'
          this.infoType = 'success'
        } catch (error) {
          this.error = error.response.data.error || '网络故障'
          this.infoType = 'warning'
        }
      }
      this.isShow = true
      setTimeout(() => {
        console.log(this.errorType)
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
