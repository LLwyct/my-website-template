<template>
  <v-container>
    <v-alert style="height:30px;" v-bind:class="{hidden: !isShow}" v-bind="{value: true, color: infoType}" >{{this.error}}</v-alert>
      <v-layout align-center justify-center>
        <v-flex xs12 md6 lg4>
              <panel paneltitle="注册">
                <v-text-field type="email" v-model="email" placeholder="email" autocomplete="off"></v-text-field>
                <v-text-field
                  type="password"
                  v-model="password"
                  placeholder="password"
                  autocomplete="newword"
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="repassword"
                  placeholder="repassword"
                  autocomplete="newword"
                ></v-text-field>
                <v-btn color="primary" @click="register">注册</v-btn>
              </panel>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
import panel from './Panel'

export default {
  components: {
    panel
  },
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
          try {
            this.error = error.response.data.error || '网络故障'
            this.infoType = 'warning'
          } catch (error) {
            this.$router.push({
              name: 'error'
            })
          }
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
