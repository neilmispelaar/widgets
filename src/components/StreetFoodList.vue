<template>
  <div class="h-full">

    <h2 class="sr-only">Streetfood List</h2>

    <div
      class="
        w-full
        h-full
        p-10
        bg-gray-100 ">

        <div
          v-if="streetfood.length <= 0">

          <p>No one in the list</p>

        </div>

        <div v-else>
        <ul>

          <li
            v-for="vendor in streetfood"
            :key="vendor"
            class="
              bg-red-100
              my-10
              border-2 border-red-300
            ">

            {{ vendor.name }}

          </li>

        </ul>
        </div>

    </div>

  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from 'vuex';

export default {
  setup() {

    // Setup reactive elements
    const localState = reactive({
      streetfood: null,
      loaded: null,
    });

    // Grab a reference to our vuex store
    const store = useStore();

    // Get the loaded state
    localState.loaded = computed(() => store.getters['streetfood/getLoadedState']);

    // Get the streetfood state
    localState.streetfood = computed(() => store.getters['streetfood/getStreetFood']);


    return {
      ...toRefs(localState),
    }

  },
}
</script>
