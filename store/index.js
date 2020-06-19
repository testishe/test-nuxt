export const state = () => ({
  text: ''
})

export const mutations = {
  addText (state, text) {
    state.text = text
  }
}

export const getters = {
  getText (state) {
    return state.text
  }
}