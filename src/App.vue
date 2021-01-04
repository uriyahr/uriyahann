<template>
  <v-app id="landingPage">

    <v-overlay :value="overlay" opacity="1" color="#020c1b">
      <v-progress-circular indeterminate size="64"> </v-progress-circular>
    </v-overlay>

    <NavBar></NavBar>

    <v-main>
      <Landing/>
    </v-main>
    <!-- <v-content transition="slide-x-transition">
      <router-view>
    </router-view>
    </v-content> -->
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Landing from './views/Landing'
export default {
  name: "App",
  components: {
    NavBar,
    Landing,
  },
  data: () => ({
    overlay: false,
  }),

  watch: {
    overlay(val) {
      val && setTimeout(() => {
          this.overlay = true;
        }, 5000);
    },
  },
};
</script>

<style scoped>
#landingPage {
  background-color: #0a192f;
}
</style>