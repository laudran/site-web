<template>
    <v-app>
        <v-app-bar app>
            <template v-slot:append>
                <v-btn @click="scrollToInfo">A propos</v-btn>
                <v-btn @click="scrollToServices">Services</v-btn>
                <v-btn @click="scrollToContact">Contact</v-btn>
                <v-btn class="linkedinButton" size="small" icon target="_blank" data-type="LinkedIn" title="LinkedIn"
                    href="https://www.linkedin.com/company/cybercorsaire/">
                    <IconsLinkedinIcon />
                </v-btn>
            </template>
        </v-app-bar>
        <v-main id="main">
            <slot />
        </v-main>
        <v-footer elevation="5" class="text-center d-flex flex-column">
            <div>
                <v-btn class="mx-2 linkedinButton" variant="text" rounded="xl" size="small" icon target="_blank"
                    data-type="LinkedIn" title="LinkedIn" href="https://www.linkedin.com/company/cybercorsaire/">
                    <IconsLinkedinIcon />
                </v-btn>
            </div>
            <v-divider></v-divider>
            <div>
                {{ new Date().getFullYear() }} — <strong>Cybercorsaire</strong>
            </div>

        </v-footer>
    </v-app>
</template>
<script setup lang="ts">

    function scrollToInfo() {
        const info = document.getElementById('aboutMeSection')
        if (!info) {
            return
        }
        const y = info.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ behavior: 'smooth', top: y })
    }
    function scrollToServices() {
        const info = document.getElementById('ServicesSection')
        if (!info) {
            return
        }
        const y = info.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ behavior: 'smooth', top: y })
    }
    function scrollToContact() {
        const info = document.getElementById('ContactSection')
        if (!info) {
            return
        }
        const y = info.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ behavior: 'smooth', top: y })
    }
</script>
<style scoped lang="scss">
footer {
    background-color: rgb(5, 2, 3);
    color: white;
}
</style>