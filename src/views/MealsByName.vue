<template>
  <div class="p-8 pb-0">
    <input
      class="rounded border-2 border-gray-200 w-full"
      type="text"
      name=""
      id=""
      placeholder="Search for Meals"
      v-model="keyword"
      @change="searchMeals"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div
        v-for="meal of meals"
        :key="meal.idMeal"
        class="bg-white shadow rounded-xl"
      >
        <router-link to="/">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl w-full h-72 object-cover"
          />
        </router-link>

        <div class="p-3">
          <h3 class="font-semibold">
            {{ meal.strMeal }}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut, quis! Qui accusamus
          </p>
          <div class="flex items-center justify-between">
            <a
              :href="meal.strYoutube"
              target="__blank"
              class="px-3 py-2 rounded border-2 border-red-600 bg-red-500 text-white hover:bg-red-600 transition-colors"
              >Youtube</a
            >

            <!-- <router-link
              to="/"
              class="px-3 py-2 rounded border-2 border-purple-600 bg-purple-500 text-white hover:bg-purple-600 transition-colors"
              >View</router-link
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style scoped></style>
