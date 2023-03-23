<template>
    <section id="aboutMe" class="aboutMe">
        <v-container>
            <v-row dense align="center">
                <v-col cols="12">
                    <v-card flat>

                        <v-card-text class="aboutMeText" v-for="(par, i) in aboutMeTexts" :key="i">
                            {{ par }}
                        </v-card-text>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">

    const aboutMeTexts = [
        "CyberCorsaire est une entreprise de cybersécurité créée en Guadeloupe, qui se spécialise dans la protection des entreprises et des particuliers contre les menaces en ligne telles que les attaques de piratage informatique, les vols de données et les intrusions malveillantes.",
        `Le nom "CyberCorsaire" est un clin d'œil à l'histoire des corsaires guadeloupéens, qui étaient des marins courageux et astucieux qui luttaient contre les pirates pour protéger leurs navires et leurs cargaisons. Tout comme les corsaires guadeloupéens, les cybercorsaires de cette entreprise sont des experts en sécurité informatique qui utilisent des technologies de pointe et des stratégies innovantes pour protéger leurs clients contre les pirates informatiques et autres menaces en ligne.`,
        `Grâce à leur expertise et à leur expérience, les cybercorsaires de notre entreprise sont de véritables défenseurs de la sécurité informatique. Nous sommes fiers de pouvoir offrir à nos clients des solutions de protection efficaces pour leur permettre de naviguer en toute sécurité dans l'univers numérique complexe d'aujourd'hui.`
    ];

    const scrollToComponent = () => {

    } 
</script>

<style lang="scss" scoped>
.aboutMe {
    padding: 2rem;
    width: 100%;

    &Text {
        font-size: 16px;
    }
}
</style>