<template>
    <v-main class="background-image">
        <v-container>
            <v-card class="text-format  rounded-lg rounded-md-xl pa-8 ma-4 pa-md-10 mt-10 mx-lg-auto">
                <div ref="subscribe" class="text-h4 text-lg-h2 font-weight-black text-center mb-4 pb-4">
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
        </v-container>
    </v-main>
</template>

<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import axios from 'axios'
import Swal from 'sweetalert2'

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
    axios.post("https://aiworkshop-69bd8-default-rtdb.firebaseio.com/submissions.json", values)
        .then(function (response) {
            Swal.fire({
                title: "Thank you for registering!",
                text: "We are looking forward to see you.",
                icon: "success"
            });
        })
        .catch(function (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Try to contact the event organization.",
            });
        });
})
</script>

<style scoped>
.background-image {
    background-image: url('/fu-university.jpeg');
    /* Replace with your image path */
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    /* Full viewport height */
    width: 100vw;
    /* Full viewport width */
    padding: 0;
    /* Remove padding */
    margin: 0;
    /* Remove margin */
}

.text-format {
    color: rgb(0, 0, 0);
    background-color: rgba(245, 245, 245, 0.97);
    max-width: 50rem;
}
</style>