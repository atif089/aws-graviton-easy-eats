export const state = () => ({
  menu: [],
  cart: [],
  order: []
})

export const mutations = {
  SET_MENU(state, payload) {
    state.menu = payload
  },
  ADD_TO_CART(state, payload) {
    const itemExists = state.cart.find(item => item.item_id === payload.item_id)
    if (itemExists) return
    state.cart.push(payload)
  },
  REMOVE_CART_ITEM(state, payload) {
    state.cart.splice(payload, 1)
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await this.$axios.$get('/api/menu')
    commit('SET_MENU', response)
  },
  addToCart({ commit }, payload) {
    commit('ADD_TO_CART', payload)
  },
  removeCartItem({ commit }, payload) {
    commit('REMOVE_CART_ITEM', payload)
  }
}
