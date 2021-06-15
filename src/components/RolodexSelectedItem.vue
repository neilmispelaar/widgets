<template>

    <div class="h-full p-5 rounded-lg ml-5 bg-blue-100">

      <div
        v-if="selectedPerson !== null">

        <dl>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 rounded-t-xl">
            <dt class="text-sm font-medium text-gray-500">
              First name:
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              {{ selectedPerson.name.first }}
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Middle name:
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              {{ selectedPerson.name.middle }}
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 rounded-b-xl">
            <dt class="text-sm font-medium text-gray-500">
              Last name:
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              {{ selectedPerson.name.last }}
            </dd>
          </div>

        </dl>

      </div>

      <div
        v-else>
        <p>Please select a person</p>
      </div>

    </div>

</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {

    // Grab a reference to the vuex store
    const store = useStore()

    const selectedPerson = computed(() => store.getters['rolodex/getSelectedPerson']);

    return {
      selectedPerson,
    }

  },
}
</script>
