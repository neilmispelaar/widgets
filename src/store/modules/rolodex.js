// Local Storage Flag
// The flag is set to true when the user is above 19

// initial state
// category: [{ id, quantity }]
//
const state = {
  people: [
    {
      id: 1,
      name: {
        first: 'Micheal',
        middle: '',
        last: 'Jackson',
      }
    },
    {
      id: 2,
      name: {
        first: 'John',
        middle: 'Bon',
        last: 'Jovi',
      }
    },
    {
      id: 3,
      name: {
        first: 'Joe',
        middle: '',
        last: 'Vindaloo',
      }
    },
    {
      id: 4,
      name: {
        first: 'Mark',
        middle: '',
        last: 'Lebowski',
      }
    },
    {
      id: 5,
      name: {
        first: 'Brenda',
        middle: '',
        last: 'Mulvani',
      }
    }
  ],
  loaded: false,
  selectedPersonId: null,
}

// getters
const getters = {

  // Get loaded state
  getLoadedState (state) {
    return state.loaded;
  },

  // Get all People - no sorting applied
  getPeople (state) {
    return state.people;
  },



  // Get all People - no sorting applied
  getPersonById: (state, getters) => (id) => {

    var person = null;

    // Try to find person
    person = getters.getPeople.find(element => element.id === id);

    // If it couldn't find a person and person is undefined then
    // return null
    return person || null;
  },


  getSelectedPerson(state, getters) {

    var person = null;

    // Try to find person
    person = getters.getPeople.find(element => element.id === getters.getSelectedPersonId);

    // If it couldn't find a person and person is undefined then
    // return null
    return person || null;

  },

  // Get the ID of the Selected Item
  getSelectedPersonId (state) {
    return state.selectedPersonId;
  },

}


// actions
const actions = {

  // Set the Selected Item
  SelectPerson ({ commit, state, getters },  person ) {

    console.log('clicked', person);

    commit('setSelectedItem', person.id);

  }

}

// mutations
const mutations = {

  setSelectedItem (state,  id ) {
    // Check to see if it's not undefined
    if (id)
      state.selectedPersonId = id;
  },


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
