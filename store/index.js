export const state = () => ({
  menu: [],
})

export const mutations = {
  SET_MENU(state, payload) {
    state.menu = payload
  },
}

export const actions = {
  async getMenu({ commit }) {
    const response = await this.$axios.$get('/api/menu')
    commit('SET_MENU', response)
  },
}
