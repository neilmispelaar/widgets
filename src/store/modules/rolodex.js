import PeopleService from '../../services/people/people';

// Local Storage Flag
// The flag is set to true when the user is above 19

// initial state
// category: [{ id, quantity }]
//
const state = {
  people: [],
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

  // Run this at the start of the app to initialise
  // the categories
  initialiseRolodex ({ commit, dispatch }) {

    dispatch('fetchPeople');

  },

  // Fetch and load the categories
  fetchPeople ({ commit, state, getters }) {

     // Get all of the Product Categories from the API
     PeopleService
     .getAll()
     .then((people) => {

      commit('setPeople', people);

      commit('setLoadedState', true);

     });

  },

  // Set the Selected Item
  SelectPerson ({ commit, state, getters },  person ) {

    console.log('clicked', person);

    commit('setSelectedItem', person.id);

  }

}

// mutations
const mutations = {

  setPeople (state, people) {
    // Check to see if the incoming people are undefined
    if (people)
      state.people = people;
  },

  setSelectedItem (state,  id ) {
    // Check to see if it's not undefined
    if (id)
      state.selectedPersonId = id;
  },

  setLoadedState (state,  flag ) {
    state.loaded = flag;
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
