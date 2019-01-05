<template>
    <v-footer
      height="auto"
      color="grey lighten-2"
      app
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          v-for="link in links"
          :key="link"
          flat
          round
        >
          {{ link }}
        </v-btn>
        <v-flex
          lighten-2
          py-3
          text-xs-center
          xs12
        >
          &copy;2018 — <strong>Vuetify</strong>
        </v-flex>
      </v-layout>
    </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      'About Us',
      'Services',
      'Blog',
      'Wechat'
    ]
  })
}
</script>
