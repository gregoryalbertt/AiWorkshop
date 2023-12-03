<template>
  <v-app-bar class="bring-back" absolute flat color="rgba(255, 255, 255, 0.1)">
    <v-app-bar-title>

      <!-- <v-icon icon="mdi-circle-slice-6" /> -->


      <div class="row mx-auto d-flex justify-center ma-2 pa-2">

        <v-btn class="ma-3 pa-3" rounded="lg" variant="outlined">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </v-btn>
        <v-btn class="ma-3 pa-3" rounded="lg" variant="outlined">
          <router-link :to="{ name: 'Schedule' }">Schedule</router-link>
        </v-btn>
        <v-btn class="ma-3 pa-3" rounded="lg" variant="outlined">
          <router-link :to="{ name: 'Speakers' }">Speakers</router-link>
        </v-btn>
        <v-btn class="ma-3 pa-3" rounded="lg" variant="outlined">
          <router-link :to="{ name: 'Subscribe' }">Register</router-link>
        </v-btn>
      </div>



    </v-app-bar-title>
  </v-app-bar>
</template>

<script>

export default {
  methods: {
    scrollToSubscribe() {
      this.$refs.subscribe.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

</script>

<style scoped>
bring-back {
  z-index: -1;
}
</style>
