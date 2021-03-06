const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  user: null
}

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

export const actions = {
  // nuxtServerInit 会在服务端渲染期间自动调用
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}