// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/': {
            ssr: true
        }
    },
    ssr: true,
    modules: [
        '@/modules/vuetify',
        'nuxt-calendly'
    ],
    calendly: {
        /**
         * Setting to `false` disables the module.
         * @default true
         * @description Use this setting to disable the module.
         */
        isEnabled: true,
        /**
         * Loads the required CSS for Calendly directly into your app. Saves a HTTP Request.
         * @default true
         * @description Disable if you already load https://assets.calendly.com/assets/external/widget.css by yourself, or you want to load a custom CSS.
         */
        loadWidgetCSS: true,
        /**
         * Loads a required SVG Asset for Calendly directly into your app. Saves a HTTP Request.
         * @default true
         * @description Disable if you already load https://assets.calendly.com/assets/external/close-icon.svg by yourself, or you want to load a custom SVG.
         */
        loadWidgetCloseIconSvg: true
    },
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
