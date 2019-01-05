<template>
<v-container>
  <v-layout column class="mt-4 pt-4">
    <v-flex class="mb-4">
        <img src="../assets/baseline-build-24px.svg" alt="x" class="error-500">
    </v-flex>
    <v-flex class="mt-4 ">
      <h1>啊哦，服务器可能爆炸了</h1>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.icon{
  width: 300px;
  height: 300px;
}
.error-500{
  width: 10vw;
  height: 10vh;
}
</style>
