<template>
  <section>
    <div class="flex flex-row flex-nowrap items-stretch">

      <h1 class="sr-only">StreetFood Explorer</h1>

      <!-- List -->
      <div class="w-1/3">

        <street-food-list />

      </div>


      <!-- Selected Item -->
      <div class="w-2/3">

        <street-food-selected />

      </div>

    </div>
  </section>
</template>

<script>
import StreetFoodList from '../components/StreetFoodList.vue';
import StreetFoodSelected from './StreetFoodSelected.vue';

export default {
  components: {
    StreetFoodList,
    StreetFoodSelected
  },
  setup() {

  },
}
</script>
