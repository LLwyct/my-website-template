import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Vue使用单一状态树，因此每一个app直包含一个store实例

export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    token: null,
    isUserLoggedIn: false
  },
  mutations: {
    // mutations里的方法更像是一个唯一的字符串，类似于emit后的标识
    // 触发的唯一方法就是用commit激活匹配的字符串
    // ！！！mutation必须是同步函数
    // ！！！mutation必须是同步函数
    // ！！！mutation必须是同步函数
    setToken (state, token) {
      // 其中state是必要的参数，即上文的state
      // token为载荷，即额外的参数
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    // 而Action则可以是异步的，因为Action 提交的是 mutation
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
// actions: {
//   increment (context) {
//     context.commit('increment')
//   }
// }
// 正常的做法是利用store.commit('xxx')来触发一个mutation
// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象， 因此你可以调用 context.commit
// 实践中，我们会经常用到 ES2015的参数解构来简化代码(特别是我们需要调用 commit 很多次的时候)
