<template>
  <v-container colmun>
    <v-layout align-center justify-center>
      <v-flex xs12 md6 lg4>
        <panel paneltitle="songs">
          <div v-for="song in songs" :key="song.id">
            {{song.title}} - {{song.artist}} - {{song.tab}}
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongService from '@/services/Songservice'
import panel from '@/components/Panel'

export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    panel
  },
  async mounted () {
    // get songs info from backend
    this.songs = (await SongService.index()).data
  }
}
</script>

<style scoped>

</style>
