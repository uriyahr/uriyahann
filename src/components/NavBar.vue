<template>
  <v-app-bar app color="transparent" elevation="0" hide-on-scroll>
    <!-- insert icon here -->

    <v-spacer />

    <!-- display mobile menu bar as alt-->

    <div v-for="index in rightNav" :key="index.i">
      <button
        class="link"
        :class="{ activeButton: path === index.route }"
        @click="route(index.route)"
      >
        <span class="textSecondary--text" id="accentNum"> {{ index.accentNum }} </span>
        <span class="textPrimary--text" id="title"> {{ index.title }} </span>
      </button>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    rightNav: [
      { accentNum: "01.", title: "About", route: '/about' },
      { accentNum: "02.", title: "Experience", route: '/experience' },
      { accentNum: "03.", title: "Work", route: '/work'},
      { accentNum: "04.", title: "Contact", route: '/contact' },
    ],
  }),
  methods: {
    route(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
  computed: {
    path() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
</style>