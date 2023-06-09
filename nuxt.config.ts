// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/': {
            ssr: true
        }
    },
    ssr: true,
    modules: [
        '@/modules/vuetify'
    ],
    plugins: [
        '@/plugins/recaptcha'
    ],
    app: {
        head: {
            title: "Cybercorsaire - La Cybersécurité en Guadeloupe",
            meta: [
                {
                    name: 'description',
                    content: "Cybercorsaire est un cabinet de consulting fondé en Guadeloupe en 2022. Face à un Cyperpirate, n'hésitez pas, faites appel à un cybercorsaire."
                }
            ]
        }
    },
    runtimeConfig: {
        public: {
            recaptcha: {
                version: 3,
                siteKey: '6LdctigjAAAAAKcZwqQA8t2TDyCj6lFHhqGSuQ9u',
                apiSecret: '6LdctigjAAAAAFjq2rVODyXuVcBeKSm_6JncTpu5'
            },
            email: {
                url: 'https://emailservice.vercel.app/api/email'
            }
        }
    }
})
