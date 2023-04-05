<template>
  <div class="p-8">
    <input
      class="rounded border-2 border-gray-200 w-full"
      type="text"
      name=""
      id=""
      placeholder="Search for Meals"
      v-model="keyword"
      @change="searchMeals"
    />

    <div>
      <pre>{{ meals }}</pre>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import store from '../store';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}
</script>

<style scoped></style>
