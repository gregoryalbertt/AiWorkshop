<template>
    <v-card color="rgb(0,0,0, 0.5)" class="h-100">
        <v-img gradient="to bottom, rgba(0,0,0,.2), rgba(255,255,255,.2)" class="background" src="/fu-university.jpeg">




            <base-card>

                <v-card class="pa-md-10 mt-10 mx-lg-auto">
                    <div ref="subscribe" class="text-h2 font-weight-black text-center mb-4 pb-4">
                        Registration
                    </div>
                    <form @submit.prevent="submit">
                        <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
                            label="Name"></v-text-field>

                        <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                            label="E-mail"></v-text-field>

                        <v-select v-model="select.value.value" :items="items" :error-messages="select.errorMessage.value"
                            label="In which session are you going to participate?"></v-select>

                        <v-btn class="me-4" type="submit">
                            Submit
                        </v-btn>

                        <v-btn @click="handleReset">
                            Clear
                        </v-btn>
                    </form>

                </v-card>


            </base-card>
        </v-img>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import axios from 'axios'
import BaseCard from '@/layouts/default/BaseCard.vue';

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
        select(value) {
            if (value) return true

            return 'Select an item.'
        },
    },
})
const name = useField('name')
const email = useField('email')
const select = useField('select')

const items = ref([
    'Session I (Morning): 10 a.m. to 12 p.m.',
    'Session II (Afternoon): 2:15 p.m. to 5 p.m.  (Keynote Speaker: Professor Yasmin B. Kafai)',
    'Session I and Session II',
])

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
    axios.post("https://aiworkshop-69bd8-default-rtdb.firebaseio.com/submissions.json", values)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
})
</script>