<template>
    <v-sheet ref="speakers" class="mx-auto" elevation="8" max-width="1600" pa-2 ma-2>
        <div class="text-h2 font-weight-black text-center ma-4 pa-4">
            Speakers
        </div>
        <div class="text-4 ma-2 pa-2">
            Lorem ipsum

        </div>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
            <v-slide-group-item v-for="(speaker) in speakers" :key="speaker.name"
                v-slot="{ isSelected, toggle, selectedClass, }">
                <v-card :image="speaker.picture" :class="['ma-4', selectedClass]" height="300" width="240" @click="toggle">
                    <div class="d-flex fill-height align-center justify-center">
                        <v-scale-transition>
                            <!-- <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                             -->

                        </v-scale-transition>
                        <v-overlay :model-value="isSelected" contained scrim="#036358" class="align-center justify-center">
                            <!-- <v-btn variant="flat">See more info</v-btn> -->
                        </v-overlay>

                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>

        <v-expand-transition>
            <v-sheet v-if="model != null" height="200">
                <div class="d-flex fill-height align-center justify-center">
                    <h3 class="text-h6">
                        <div class="text-h4">
                            {{ speakers[model].name }}
                        </div>
                        <div class="text-h5">
                            {{ speakers[model].role }}
                        </div>
                        <div class="text-h5">
                            {{ speakers[model].department }}
                        </div>
                        <div class="text-h5">
                            {{ speakers[model].university }}
                        </div>

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
        speakers: [
            {
                name: "Prof. Dr. Ralf Romeike",
                role: "Professor",
                department: "Computing Education Research Group",
                university: "Freie Universität Berlin",
                description: "description",
                picture: "ralf.png"
            },
            {
                name: "Kamilla Tenório",
                role: "Researcher",
                department: "Computing Education Research Group",
                university: "Freie Universität Berlin",
                description: "description",
                picture: "kamis.png"
            },
            {
                name: "Uwe Lorenz",
                role: "Researcher",
                department: "Computing Education Research Group",
                university: "Freie Universität Berlin",
                description: "description",
                picture: "uwe.png"
            },
            {
                name: "Kamis",
                role: "role",
                department: "Computing Education Research Group",
                description: "description",
                picture: "kamis"
            },
            {
                name: "Kamis",
                role: "role",
                department: "Computing Education Research Group",
                description: "description",
                picture: "kamis"
            },
        ],
    }),
    computed: {
        speakerImage() {
            if (this.model) {
                console.log(this.model);
                return this.speakers[this.model].name
            }
            else {
                return 'kamis'
            }

        }
    }
}
</script>

<style scoped></style>