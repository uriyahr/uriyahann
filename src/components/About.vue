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
        <span id="accent-num"> 01. About Me </span> 
        <v-divider inset></v-divider>
        <span id="text"></span>
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
.About {
    height: 100vh;
}
#card-title {
    
}
</style>
