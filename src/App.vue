<template>
  <v-app id="landingPage">
    <NavBar></NavBar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import HelloWorld from './components/HelloWorld';
export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
 #landingPage {
   background-color: #0a192f;
 }
</style>