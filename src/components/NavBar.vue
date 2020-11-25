<template>
  <v-app-bar app color="transparent" elevation="0" hide-on-scroll>
    <!-- insert icon here -->
    <v-img
      :src="require('../assets/circled-u.svg')"
      :class="{ activeButton: path === '/',
               'ml-auto': $vuetify.breakpoint.smAndDown, 
               'ml-n16': $vuetify.breakpoint.mdAndUp}"
      @click="route('/')"
      contain
      height="42"
      width="42"
      id="nav-logo">
      
    </v-img>
    <v-spacer />

    <!-- display mobile menu bar alt-->

    <div v-for="index in rightNav" :key="index.i">
      <button
        class="right-nav"
        :class="{ activeButton: path === index.route }"
        @click="route(index.route)">
          <span class="button-hover">
            <span id="accentNum"> {{ index.accentNum }} </span>
            <span id="title"> {{ index.title }} </span>
          </span>
          
      </button>
    </div>

    <div>
      <v-btn
        small
        :ripple="false"
        id="resume-button"
        :class="{ activeButton: path === '/resume'}"
        @click="route('/resume')"
        outlined
        color="textSecondary"
      >
        Resume
      </v-btn>
    </div> 
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    rightNav: [
      { accentNum: "01.", title: "About", route: "/about" },
      { accentNum: "02.", title: "Experience", route: "/experience" },
      { accentNum: "03.", title: "Work", route: "/work" },
      { accentNum: "04.", title: "Contact", route: "/contact" },
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
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap");

#accentNum {
  margin-right: -5px !important;
  color: #64ffda;
}

#nav-logo {
  margin-left: -400px !important;
}

.right-nav {
  border: none !important;
  outline: none !important;
  font-family: "Fira Code", monospace;
  font-size: 13px;
  font-weight: 400;
}

span.button-hover:hover span{
  color: #64ffda !important;
}

#title {
  padding-right: 2em;
  color: #ccd6f6;
}

.v-btn:not(.v-btn--round).v-size--small[data-v-4295d220] {
  padding: 18px; 
  font-size: 11px;
  font-weight: 400; 
}

.v-ripple__container:active {
  opacity: 0 !important;
}



</style>