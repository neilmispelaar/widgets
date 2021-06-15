<template>
  <div class="">

    <h2 class="sr-only">Rolodex List</h2>

    <div
      v-if="people.length <= 0">

      <p>No one in the list</p>

    </div>

    <div v-else>
    <ul>

      <rolodex-list-item
        v-for="(person, index) in people"
        :key="index"
        :person="person"
      />

    </ul>
    </div>


  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from 'vuex';
import RolodexListItem from './RolodexListItem.vue';


export default {
  components: {
    RolodexListItem
  },
  setup() {

    // Setup reactive elements
    const localState = reactive({
      people: null,
      loaded: null,
    });

    // Grab a reference to our vuex store
    const store = useStore();

    // Get the loaded state
    localState.loaded = computed(() => store.getters['rolodex/getLoadedState']);

    // Get the streetfood state
    localState.people = computed(() => store.getters['rolodex/getPeople']);


    return {
      ...toRefs(localState),
    }

  },
}
</script>
