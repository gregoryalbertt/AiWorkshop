<template>
    <v-card cover height="100%" image="/fu-university.jpeg">

        <base-card class="text-format">

            <section>

                <v-row>
                    <div class="text-h2 text-center mx-auto font-weight-black">
                        AI EDUCATION DAY
                    </div>
                </v-row>

                <v-row class="text-center mx-auto">
                    <div class="text-h4 text-center">
                        AT
                    </div>
                    <div class="text-h4 text-center font-weight-black">
                        FREIE UNIVERSITÄT BERLIN
                    </div>
                </v-row>
                <v-row>
                    <div class="text-h5 text-center mx-auto">
                        with Professor Yasmin B. Kafai (University of Pennsylvania) as keynote speake
                    </div>
                </v-row>
            </section>

            <section>
                <v-row>
                    <div class="text-h4 text-center mx-auto font-weight-black">
                        JANUARY 18TH, 2024
                    </div>
                </v-row>

                <v-row>
                    <div class="text-h5 text-center mx-auto">
                        09:30 a.m to 05:30pm
                    </div>
                </v-row>
            </section>


            <section>
                <v-row>
                    <div class="text-h4 text-center mx-auto font-weight-black">
                        LOCAL
                    </div>
                </v-row>

                <v-row>
                    <div class="text-h5 text-center mx-auto">
                        Session I: Königin-Luise-Str. 24/26
                    </div>
                </v-row>
                <v-row>
                    <div class="text-h5 text-center mx-auto">
                        Session II: Fabeckstraße 35 - Room 001
                    </div>
                </v-row>
            </section>

            <section>
                <v-row>
                    <v-col>
                        <div class="text-h5 text-right mx-auto font-weight-black">
                            FUNDED BY
                        </div>
                    </v-col>
                    <v-col>
                        <v-img src="/BMBF-Logo.png">
                        </v-img>
                    </v-col>
                    <v-col>
                        <v-img src="/EU-logo.png">
                        </v-img>
                    </v-col>
                    <v-col>
                        <v-img src="/Berlin-Ressortlogo.png">
                        </v-img>
                    </v-col>
                </v-row>
            </section>






        </base-card>
        <!-- <div class="container">
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
        </div> -->



    </v-card>
</template>

<script>
import BaseCard from '@/layouts/default/BaseCard.vue'
export default {
    data() {
        return {
            rounded: 'xl',
        }
    },
    components: { BaseCard }

}
</script>

<style scoped>
.container {
    color: rgb(255, 255, 255);
    margin: 20%;
}

.text-format {
    color: rgb(0, 0, 0);
    background-color: rgba(245, 245, 245, 0.75);
    margin-top: 10%;
    text-align: center;
}

section {
    margin: 4rem;
}

div {
    text-align: center;
}

row {
    text-align: center;
}
</style>