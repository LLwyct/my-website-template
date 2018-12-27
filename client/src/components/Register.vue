<template>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex md6>
          <div class="white elevation-2" column>
            <v-toolbar>
              <v-toolbar-title>注册</v-toolbar-title>
            </v-toolbar>
            <v-layout column class="pl-4 pr-4 pt-2 pb-2">
              <v-text-field type="email" v-model="email" placeholder="email"></v-text-field>
              <v-text-field type="password" v-model="password" placeholder="password"></v-text-field>
              <v-btn color="primary" @click="register">注册</v-btn>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
      <div v-html="error" class="error"></div>
    </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
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
