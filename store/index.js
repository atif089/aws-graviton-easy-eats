export const state = () => ({
  menu: [],
  cart: [],
  order: []
})

export const mutations = {
  SET_MENU(state, payload) {
    state.menu = payload
  },
  UPDATE_CART(state, payload) {
    const itemExists = state.cart.find(item => item.item_id === payload.item_id)
    if (itemExists) return
    state.cart.push(payload)
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await this.$axios.$get('/api/menu')
    commit('SET_MENU', response)
  },
  addToCart({ commit }, payload) {
    commit('UPDATE_CART', payload)
  }
}
