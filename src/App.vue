<template>
  <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />

  <!-- Container -->
  <div class="container">

    <main>

      <street-food />

    </main>

  </div>

</template>

<script>
import StreetFood from "./components/StreetFood.vue";

export default {
  components: {
    StreetFood,
  },
  setup() {

  },
}
</script>
