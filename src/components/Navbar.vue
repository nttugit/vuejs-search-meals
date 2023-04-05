<template>
  <header
    class="bg-white shadow h-16 flex justify-between items-stretch"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center px-5 h-full"
    >
      Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="flex items-center inline-block px-2 h-full transition-colors hover:bg-gray-200"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="flex items-center inline-block px-2 h-full transition-colors hover:bg-gray-200"
        >Meals by Letter</router-link
      >
      <router-link
        :to="{
          name: 'byIngredient',
        }"
        class="flex items-center inline-block px-2 h-full transition-colors hover:bg-gray-200"
        >Meals by Ingredients</router-link
      >
    </div>
  </header>
</template>
