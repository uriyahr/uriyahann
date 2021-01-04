<template>
  <v-container fluid fill-height class="Home">
    <v-card
      fill-height
      class="d-flex mb-6"
      width="auto"
      id="card-intro"
      color="transparent"
      flat
    >
      <v-card class="pa-2 card-text" color="transparent" flat>
        <span id="text-0"> Hello, my name is </span>
        <span id="text-1"> Uriyah Ann Ruiz.</span>
        <span id="text-2"> I do cool things with code. </span>
        <span id="text-3">
          I'm an undergraduate student studying computer science and mathematics located in the Bay Area, CA. My work is ranges from creating different versions of a mandelbrot simulation to Web Development. Passion and curiosity is what contiunously drives me and I am content with my love to code. </span
        >
        <div>
          <v-btn
            small
            :ripple="false"
            id="get-in-touch"
            outlined
            color="textSecondary"
          >
            Get In Touch
          </v-btn>
        </div>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({}),
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap");
.Home {
  height: 100vh;
}
#card-intro {
  left: 25%;
}

.card-text span {
  display: grid;
  word-spacing: 0px;
  letter-spacing: 0px;
  line-height: 1.5;
}

#text-0 {
  color: #64ffda;
  font-family: "Fira Code", monospace;
  font-size: 16px;
  font-weight: 400;
}

#text-1 {
  color: #ccd6f6;
  font-family: "Roboto", sans-serif;
  font-size: 75px;
  font-weight: 600;
}

#text-2 {
  color: #8892b0;
  font-family: "Roboto", sans-serif;
  font-size: 75px;
  font-weight: 600;
  margin-top: -15px;
}

#text-3 {
  color: #8892b0;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 200px;
  max-width: 500px;
  overflow: hidden;
  margin-top: 20px;
}

#get-in-touch {
  text-transform: none;
  margin-top: 50px;
}

.v-btn:not(.v-btn--round).v-size--small {
  padding: 28px;
  font-size: 14px;
  font-weight: 300;
}

.v-ripple__container:active {
  opacity: 0 !important;
}
</style>
