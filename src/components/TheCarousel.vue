<template>
    <!-- <v-carousel cycle height="100%" hide-delimiter-background show-arrows="hover"> -->
    <!-- <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                        {{ slide }} Slide
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item> -->

    <!-- <v-carousel-item>
            <v-card cover height="100%" image="/fu-university.jpeg">
                <div class="text-h1 text-center">
                    TITLE
                </div>
            </v-card>
        </v-carousel-item> -->

    <!-- </v-carousel> -->
    <v-card cover height="100%" image="/fu-university.jpeg">


        <v-card>


        </v-card>

        <div class="container">
            <div class="row">
                <div class="text-h2 text-center mx-auto font-weight-black">
                    Collaborative Workshop
                </div>
            </div>

            <div class="row">
                <div class="text-h3 text-center mx-auto font-weight-black">
                    Shaping Responsible AI Education for All
                </div>
            </div>
            <div class="row">
                <div class="text-h5 text-center mx-auto font-weight-black">
                    January 18, 2024

                    09:00 a.m. to 3:00 p.m. <br>

                    Königin-Luise-Str. 24/26

                    14195 Berlin
                </div>
            </div>


        </div>

    </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    color: rgb(255, 255, 255);
    margin: 20%;
}

.text-h1 {
    text-shadow: 2px 2px 4px #000000;
}

.text-h2 {
    text-shadow: 2px 2px 4px #000000;
    padding: 1rem;
    background-color: rgba(245, 245, 245, 0.23);
}

.text-h3 {
    text-shadow: 2px 2px 4px #000000;
    padding: 1rem;
    background-color: rgba(245, 245, 245, 0.33);
}

.text-h4 {
    text-shadow: 2px 2px 4px #000000;
    background-color: rgba(245, 245, 245, 0.33);
}

.text-h5 {
    text-shadow: 2px 2px 4px #000000;
    background-color: rgba(245, 245, 245, 0.43);
}
</style>