import { defineNuxtModule } from '@nuxt/kit'
import vuetifyLoader from 'vite-plugin-vuetify'

export default defineNuxtModule({
    setup(options, nuxt) {
        nuxt.options.build.transpile.push('vuetify')
        nuxt.options.css.push('vuetify/lib/styles/main.css')
        nuxt.options.vite.ssr ??= {}
        nuxt.options.vite.ssr.noExternal ??= []
        if (!Array.isArray(nuxt.options.vite.ssr.noExternal)) {
            throw new Error('Expected nuxt.options.vite.ssr.noExternal to be an array.')
        }
        nuxt.options.vite.ssr.noExternal.push('vuetify')

        nuxt.options.vite.ssr ??= {}
        nuxt.hook('vite:extendConfig', config => {
            config.plugins?.push(vuetifyLoader())
        })
    }
})