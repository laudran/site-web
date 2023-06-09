<template>
    <section class="contactForm">
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="12" md="6" class="text-center font-weight-bold">
                    <h4 class="text-h4">Nous contacter</h4>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="10" md="4">
                    <CalendlyInlineWidget v-bind="calendlyOption" />
                </v-col>
            </v-row>
        </v-container>

        <v-snackbar v-model="snackbar" :color="snackbarOptions.color" :class="snackbarOptions.textColor ?? 'text-white'">
            <p :class="snackbarOptions.textColor ?? 'text-white'">{{ snackbarOptions.text }}</p>
            <v-list lines="one" v-if="snackbarOptions.list" :items="snackbarOptions.list"
                :class="snackbarOptions.textColor ?? 'text-white'" density="compact" class="bg-transparent">
            </v-list>
            <template v-slot:actions>
                <v-btn :color="snackbarOptions.closeColor" variant="text" @click="snackbar = false">
                    Fermer
                </v-btn>
            </template>
        </v-snackbar>
    </section>
</template>

<script lang="ts" setup>
    import axios from 'axios'
    import type { ReCaptchaInstance } from '@/types/recaptcha';
    import type { ContactData } from '@/types/form';
    import type { SnackbarData } from '@/types/snackbar'

    const { $recaptcha } = useNuxtApp()
    const recaptcha = useState<ReCaptchaInstance | null>('recaptchaObject', () => null)
    const snackbar = useState<boolean>(() => false)
    const config = useRuntimeConfig()
    const calendlyOption = {
        url: 'https://calendly.com/d/2ng-zyn-kqx/presentation-de-nos-services-30minutes'
    }
    const snackbarOptions = useState<SnackbarData>(() => ({
        color: 'red-darken-4',
        closeColor: 'white',
        text: '',
        list: []
    }))
    const lastNameRules = [
        (value: string) => !!value || 'Veuiller saisir votre nom',
        (value: string) => value.length > 2 || 'Votre nom doit faire au moins 3 caractères',
    ]
    const firstNameRules = [
        (value: string) => !!value || 'Veuiller saisir votre prénom',
        (value: string) => value.length > 2 || 'Votre prénom doit faire au moins 3 caractères',
    ]
    const companyRules = [
        (value: string) => '' === value || value.length > 2 || 'Veuillez saisir au moins 3 caractères',
    ]
    const messageRules = [
        (value: string) => !!value || 'Veuiller saisir un message',
        (value: string) => value.length > 10 || 'Votre message doit faire plus de 10 caractères',
    ]
    const emailRules = [
        (v: string) => !!v || 'Votre e-mail est obligatoire',
        (v: string) => /.+@.+/.test(v) || 'Veuillez saisir un email valide',
    ]

    const contactRequest = useState('contentRequest', () => {
        return {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            message: '',
            recaptchaToken: '',
        } as ContactData
    })

    const valid = useState('validContact', () => false)
    const formsubmit_id = useState('contactFormId', () => null)

    async function checkRecaptcha() {
        recaptcha.value?.execute('contact_form', (token: string) => {
            submit(token)
        })
    }
    async function submit(recaptchaToken: string) {
        contactRequest.value.recaptchaToken = recaptchaToken

        await axios.post(config.public.email.url, contactRequest.value,)
            .then(Response => {
                snackbar.value = true
                snackbarOptions.value = {
                    color: 'green-darken-3',
                    text: 'Votre message a bien été envoyé',
                    closeColor: 'white'
                }
            })
            .catch(err => {
                if (!err.response) {
                    snackbarOptions.value = {
                        color: 'deep-orange-darken-3',
                        text: "Une erreur inattendue s'est produite lors de l'envoie du formulaire.",
                        closeColor: 'white',
                    }
                    return
                }
                const data = err.response.data
                snackbar.value = true
                snackbarOptions.value = {
                    color: 'deep-orange-darken-3',
                    text: err.response.data.message,
                    closeColor: 'white',
                }
                if (data.errors) {
                    snackbarOptions.value.list = err.response.data.errors
                }
            })
    }
    onMounted(() => {
        recaptcha.value = $recaptcha.init()
    })
</script>

<style scoped lang="scss">
.contactForm {
    padding: 2rem 0;
    width: 100%;
}
</style>