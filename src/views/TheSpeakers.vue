<template>
    <v-sheet ref="speakers" class="mx-auto" elevation="8" max-width="1600">
        <div class="text-h2 font-weight-black text-center ma-4 pa-4">
            Speakers
        </div>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
            <v-slide-group-item v-for="n in 5" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="300" width="240" @click="toggle">
                    <div class="d-flex fill-height align-center justify-center">
                        <v-scale-transition>
                            <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                        </v-scale-transition>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>

        <v-expand-transition>
            <v-sheet v-if="model != null" height="200">
                <div class="d-flex fill-height align-center justify-center">
                    <h3 class="text-h6">
                        Selected {{ model }}
                    </h3>
                </div>
            </v-sheet>
        </v-expand-transition>
    </v-sheet>
</template>

<script>
export default {
    data: () => ({
        model: null,
    }),
}
</script>

<style scoped></style>