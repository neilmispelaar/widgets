<template>
  <li class="flex flex-row flex-nowrap justify-between p-2 border-b my-1">
    <p>{{ person.name.last }}</p>

    <button
      class="
         self-center
        px-2 py-2
        rounded-lg
        text-white
        border-2 border-blue-800
        bg-blue-900 hover:bg-blue-600
        "
      v-on:click="personSelectedHandler">
      Select
    </button>

  </li>
</template>

<script>
import { useStore } from 'vuex';

export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  setup(props) {

    // Grab a reference to the vuex store
    const store = useStore()

    // Function handler for when someone clicks the ugly button
    function personSelectedHandler() {
      store.dispatch('rolodex/SelectPerson', props.person);
    }

    return {
      personSelectedHandler,
    }

  },
}
</script>
