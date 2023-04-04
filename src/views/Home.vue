<template>
  <div class="flex flex-col p-8">
    <input
      class="rounded border-2 border-gray-200 w-full"
      type="text"
      name=""
      id=""
      placeholder="Search for Meals"
    />
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{
          name: 'byLetter',
          params: { letter },
        }"
        v-for="letter of letters"
        :key="letter"
        class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get(
    '/list.php?i=list'
  );
  console.log(response.data);
  ingredients.value = response.data;
});
</script>

<style scoped></style>
