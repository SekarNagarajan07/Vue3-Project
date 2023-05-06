<template>
<AppHeader />
<div class="w-full flex">
  <router-view></router-view>

</div>
<teleport to="body">
<LoginModal />
</teleport>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import LoginModal from './components/LoginModal.vue'
import firebase from './utilities/firebase'

export default {
  
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn",true);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    })
  },
  components: {
    AppHeader,
    LoginModal

  },

};
</script>

<style></style>
