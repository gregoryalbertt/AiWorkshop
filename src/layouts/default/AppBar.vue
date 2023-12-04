<template>
  <v-app-bar image="/app-bar.jpeg" flat color="rgba(255, 255, 255, 0.01)">


    <v-menu>
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon class="d-lg-none" v-bind="props">
        </v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item>
          <router-link :to="{ name: 'Home' }">
            Home
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'Schedule' }">
            Schedule
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'Speakers' }">
            Speakers
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'Subscribe' }">
            Register
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-container class="d-none d-lg-block">
      <v-row no-gutters>
        <v-col cols="12" sm="1">

          <v-app-bar-title>
            <!-- <v-btn icon="$vuetify">
              Button
            </v-btn> -->
          </v-app-bar-title>
        </v-col>
        <v-col cols="12" sm="12">
          <div class="row mx-auto d-flex justify-center">

            <router-link class="text-decoration-none" :to="{ name: 'Home' } " v-slot="{ isActive }">
              <a :class="{ 'is-bold': isActive }"> HOME </a>
            </router-link>
            <router-link class="text-decoration-none" :to="{ name: 'Schedule' }" v-slot="{ isActive }">
              <a :class="{ 'is-bold': isActive }"> SCHEDULE </a>
            </router-link>
            <!-- <router-link class="text-decoration-none" :to="{ name: 'Speakers' }" v-slot="{ isActive }">
              <a :class="{ 'is-bold': isActive }"> SPEAKERS </a>
            </router-link>-->
            <router-link class="text-decoration-none" :to="{ name: 'Subscribe' }" v-slot="{ isActive }">
              <a :class="{ 'is-bold': isActive }"> REGISTER </a>
            </router-link>

          </div>
        </v-col>
      </v-row>
    </v-container>






    <div class="row">
      <div class="col">

      </div>

      <div class="col">

      </div>
    </div>





  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
}
</script>

<style scoped>
bring-back {
  z-index: -1;
}

a{
  padding: 1rem;
  color: black;
  font-family: "fira sans";
}
.router-link-exact-active {
  padding: 1rem;
  color: black;
  font-family: "fira sans";
  font-weight: bold;
}

</style>
