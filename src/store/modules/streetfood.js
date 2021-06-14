// Local Storage Flag
// The flag is set to true when the user is above 19

// initial state
// category: [{ id, quantity }]
//
const state = {
  streetfood: [
    {
      name: 'Hello'
    },
    {
      name: 'John'
    },
    {
      name: 'Joe'
    },
    {
      name: 'Jerry'
    }
  ],
  loaded: false,
}

// getters
const getters = {

  // Get loaded state
  getLoadedState (state) {
    return state.loaded;
  },

  // Get all Streetfood - no sorting applied
  getStreetFood (state) {
    return state.streetfood;
  },

}


// actions
const actions = {


}

// mutations
const mutations = {


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
