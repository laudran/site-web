<template>
    <section class="contactForm">
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="10" md="4">
                    <CalendlyInlineWidget v-bind="calendlyShortOption" />
                </v-col>
                <v-col cols="10" md="4">
                    <CalendlyInlineWidget v-bind="calendlyLongOption" />
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
    const calendlyShortOption = {
        url: 'https://calendly.com/d/2ng-zyn-kqx/presentation-de-nos-services-30minutes'
    }
    const calendlyLongOption = {
        url: 'https://calendly.com/d/2km-xrb-bzj/presentation-des-services-etude-de-besoin-1h'
    }
    const snackbarOptions = useState<SnackbarData>(() => ({
        color: 'red-darken-4',
        closeColor: 'white',
        text: '',
        list: []
    }))
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