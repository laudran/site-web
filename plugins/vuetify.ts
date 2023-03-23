import { createVuetify } from 'vuetify';
import 'vuetify/styles'

/* Add all components and directives, for dev & prototyping only. */

import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi-svg';
const aliases = allAliases;

export default defineNuxtPlugin((nuxtApp) => {

    const vuetify = createVuetify({
        icons: {
            defaultSet: 'mdi',
            aliases: {
                ...aliases,
                magnify: 'mdi-magnify',
            },
            sets: { mdi }
        },
        ssr: true,
        display: {
            mobileBreakpoint: 'sm',
        },
        theme: {
            themes: {
                light: {
                    colors: {
                        primary: '#050203',
                        secondary: '#5CBBF6',
                    },
                },
                dark: {
                    colors: {
                        primary: '#050203',
                        secondary: '#5CBBF6',
                    },
                },
            },
        },
    });
    nuxtApp.vueApp.use(vuetify);
});
