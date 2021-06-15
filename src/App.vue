<template>

  <header>

    <div class="bg-green-100">

      <div class="max-w-screen-md mx-auto p-5">

        <div class="flex flex-row justify-start align-middle">

          <img class="self-center h-10" alt="Vue logo" src="./assets/logo.png" />

          <h2 class="self-center py-5 ml-2 text-lg font-semibold">Vue-dex</h2>

        </div>

      </div>

    </div>

  </header>

  <main>

    <!-- Fluid background colour -->
    <div class="bg-blue-500">

      <!-- Container -->
      <div class="max-w-screen-md mx-auto p-5">

        <rolodex />

      </div>

    </div>

  </main>

</template>

<script>
import Rolodex from "./components/Rolodex.vue";

export default {
  components: {
    Rolodex,
  },
  setup() {

  },
}
</script>
