<!-- eslint-disable vue/require-prop-type-constructor -->
<template>
    <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="300" width="240" @click="toggle">
        <div class="d-flex fill-height align-center justify-center">
            <!-- <v-scale-transition>
                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
            </v-scale-transition> -->
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
        isSelected: { type: Boolean },
        toggle: { type: Function },
        // eslint-disable-next-line vue/require-prop-type-constructor
        selectedClass: "",
    }

}
</script>

<style lang="scss" scoped></style>