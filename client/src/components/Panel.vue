<template>
  <div class="white elevation-1" column>
    <v-toolbar flat>
      <v-toolbar-title>{{paneltitle}}</v-toolbar-title>
    </v-toolbar>
    <v-layout column class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        这还什么都没有~
      </slot>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['paneltitle']
}
</script>

<style>
</style>
