<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center font-bold">DC Heros {{ heroCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="index"
      >
        <div>{{ hero.name }}</div>
        <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero()">
      <input
        class="border rounded"
        v-model="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-r from-red-700 to to-pink-500 text-white"
        type="submit"
      >
        Add Heros
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([
      {
        name: "superGril",
      },
      {
        name: "Flash",
      },
      {
        name: "Batman",
      },
      {
        name: "SuperMan",
      },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });

    const heroCount = computed({
      get: () => dcHeros.value.length,
    });

    function remove(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i !== index);
    }

    function addHero() {
      if (newHero.value !== "") {
        dcHeros.value.unshift({
          name: newHero.value,
        });
        newHero.value = "";
      }
    }

    return {
      dcHeros,newHero,remove,addHero,newHeroRef,heroCount,
    };
  },
};
</script>

<style></style>
