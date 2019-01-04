<template>
  <v-footer height="auto" fixed dark>
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" flat round>{{ link }}</v-btn>
      <v-flex lighten-2 py-3 text-xs-center xs12>
        &copy;2018 —
        <strong>Outsider</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ['About Us', 'Team', 'Blog', 'Contact Us']
  })
}
</script>
