// import http from 'axios'

// let chat = http.create({
//   withCredentials: true
// })

export default {
  state: {
    isShow: true
  },
  mutations: {
    popChat (state, payload) {
      state.isShow = payload
    }
  },
  actions: {
    popChat ({ commit }, { isShow }) {
      commit('popChat', isShow)
    }
  }
}
