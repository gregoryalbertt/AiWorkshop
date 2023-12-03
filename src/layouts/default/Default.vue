<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <default-bar />
    <!-- <default-drawer></default-drawer> -->

    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
// import DefaultDrawer from './NavigationDrawer.vue';
</script>
