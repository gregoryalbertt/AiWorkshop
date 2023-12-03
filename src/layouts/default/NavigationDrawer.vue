<template>
    <v-navigation-drawer expand-on-hover rail>
        <!-- <v-list>
            <v-list-item prepend-avatar="@/assets/profile.jpg" title="Gregory Carvalho"
                subtitle="Computer Engineer"></v-list-item>
        </v-list> -->

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="Speakers" value="experience"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Schedule" value="key-skills"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Subscribe" value="formation"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {

}
</script>

<style scoped></style>