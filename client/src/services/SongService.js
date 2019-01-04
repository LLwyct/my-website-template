import Api from '@/services/Api'

export default {
  // get all songs
  index () {
    return Api().get('songs')
  }
}
