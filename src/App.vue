<template>
  <v-app id="landingPage">

    <v-overlay :value="overlay" opacity="1" color="#020c1b">
      <v-progress-circular indeterminate size="64"> </v-progress-circular>
    </v-overlay>

    <NavBar></NavBar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    HelloWorld,
    NavBar,
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