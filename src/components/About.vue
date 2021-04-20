<template>
   <v-container fluid fill-height class="About">
    <v-card
      class="d-flex mb-6"
      width="auto"
      id="card-intro"
      color="transparent"
      flat
    >
      <v-card class="pa-2 card-text" color="transparent" flat>
        <p><span id="accent-num"> 01.</span></p> 
        <v-divider ></v-divider>
        <span id="text">Hi! My name is Uriyah, an undergraduate student located in the Bay Area.</span>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "About",
  components: {},
  data: () => ({}),
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap");
.About {
    height: 100vh;
}

#card-intro {
  left: 25%;
}

#accent-num {
  color: #64ffda;
  font-family: "Fira Code", monospace;
  font-size: 16px;
  font-weight: 400;
}

</style>
