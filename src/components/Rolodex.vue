<template>
  <section>

    <h1 class="sr-only">Rolodex Explorer</h1>

    <div class="mt-10 bg-white p-5 rounded-2xl shadow-xl">

      <div class="flex flex-row flex-wrap items-stretch">

        <!-- List -->
        <div class="w-full md:w-2/5 self-start">

          <rolodex-list />

        </div>

        <!-- Selected Item -->
        <div class="w-full md:w-3/5">

          <rolodex-selected-item />

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import RolodexList from './RolodexList.vue';
import RolodexSelectedItem from './RolodexSelectedItem.vue';

export default {
  components: {
    RolodexList,
    RolodexSelectedItem
  },
  setup() {

  },
}
</script>
