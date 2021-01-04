<template>
  <div class="landing">
      <Home/>
      <About/>
  </div>
</template>

<script>
import Home from "../components/Home";
import About from "../components/About";
export default {
  name: "Landing",
  components: {
    Home,
    About,
  },
  data: () => ({}),
  methods: {},
};
</script>

<style scoped>

</style>
