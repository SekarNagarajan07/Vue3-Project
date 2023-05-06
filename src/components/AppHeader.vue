<template>
  <nav
    class="w-full bg-gradient-to-r from-red-800 to blue-600 text-white px-4 py-2"
  >
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="openLogin">
      Login
    </button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      list: [
        {
          title: "Dc Heros",
          to: "/DcHeros",
        },
        {
          title: "Calendar",
          to: "/CalendarApp",
        },
        {
          title: "MarkDown",
          to: "/MarkDown",
        },
        {
          title: "Slider",
          to: "/SliderPage",
        },
        {
          title: "Calculator",
          to: "/CalculatorApp",
        },
        {
          title: "Modal",
          to: "/ReuseableModal",
        },
        {
          title: "Chat",
          to: "/ChatApp",
        },
        // {
        //   title: "TensorFlow",
        //   to: "/TensorFlow",
        // },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      
    },
    openLogin() {
      this.$store.commit('setLoginModal', true)
    }
  },
};
</script>

<style></style>
