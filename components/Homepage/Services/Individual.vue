<template>
    <v-carousel height="550" class="individual" :show-arrows="isMobile" cycle hide-delimiter-background color="white" cover>
        <template v-slot:prev="{ props }">
            <v-btn variant="elevated" icon="mdi-chevron-left" @click="props.onClick" class="sliderArrow"></v-btn>
        </template>
        <template v-slot:next="{ props }">
            <v-btn variant="elevated" icon="mdi-chevron-right" class="sliderArrow" @click="props.onClick"></v-btn>
        </template>
        <v-carousel-item cover v-for="(slide, index) in carouselSlides" :key="index">
            <v-row align="start" no-gutters>
                <v-col cols="12" md="10" offset-md="1">
                    <v-row align="stretch" no-gutters class="individualSlide">
                        <v-col :cols="slide.services.length > 1 ? 6 : 12" v-for="(service, index) in slide.services"
                            class="individualSlideService">

                            <p class="text-h4 font-weight-bold individualSlideServiceTitle">{{ service.title }}</p>
                            <p class="individualSlideServiceContent" v-for="(line, index) in service.contentLines"
                                v-html="line"></p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>

<script setup lang="ts">
    import { useDisplay } from 'vuetify/lib/framework.mjs';
    import { computed } from 'vue';

    const slideContent = [
        {
            title: "Configuration sécurisée d'une box internet",
            contentLines: [
                "Votre opérateur a installé votre box, mais vous avez l'impression que n'importe qui s'y connecte ?",
                "Vous voulez simplement vous assurer que votre réseau est sécurisé ?",
                "Nous saurons auditer et sécuriser votre réseau domestique.",
                "Une autre demande particulière sur votre configuration internet, envoyez nous un mail et nous en discuterons."
            ]
        },
        {
            title: "Décontamination d'un ordinateur",
            contentLines: [
                "Votre ordinateur est lent ? <br />Des publicités apparaissent anormalement ? <br />Votre webcam s'allume toute seule ?",
                "Nous saurons vous aider et résoudre votre problème. ",
                "Nous possédons des outils et une experience qui nous permettront d'analyser votre ordinateur depuis un environnement sécurisé, et de vérifier s'il n'a pas été compromis."
            ]
        },
        {
            title: "Récupération de fichiers",
            contentLines: [
                "Vos fichiers se trouvent sur un ordinateur qui ne fonctionne pas ?",
                "Vous avez formaté ou supprimé des fichiers sur un disque dur ou une clé USB ?",
                "Ils sont peut être récupérables, contactez nous et nous étudierons cela.",
                "Vous ne payerez que ce que vous récupérerez."
            ]
        },
        {
            title: "Sécurisation",
            contentLines: [
                "Vous avez des données personnelles ou des données sensibles sur votre ordinateur et vous souhaitez le sécuriser ?",
                "Votre boite mail ou votre compte sur les réseaux se fait régulièrement pirater ?",
                "Nous saurons vous accompagner et vous conseiller.",
            ]
        },
    ]

    const { name } = useDisplay()
    const carouselSlides = computed(() => {
        const slides = [] as Array<{ services: Array<{ title: string, contentLines: Array<String> }> }>
        switch (name.value) {
            case 'xs':
            case 'sm':
                slideContent.forEach(content => {
                    slides.push({
                        services: [content]
                    })
                })
                break;
            default:
                slideContent.forEach((content, index, array) => {
                    if (index % 2 === 0)
                        slides.push({ services: array.slice(index, index + 2) });
                });
        }

        return slides
    })

    const isMobile = computed(() => {
        return name.value !== 'xs' && name.value !== 'sm'
    })
</script>

<style scoped lang="scss">
.individual {
    margin-top: 2rem;

    &Slide {
        color: white;
        margin-top: 2rem;

        p {
            color: white !important;
        }

        &Service {
            padding: 0 1rem 50px 1rem !important;

            &Title {
                margin-bottom: 2rem;
                min-height: 6.25rem;
            }

            &Content {
                font-size: 1rem;

                &:not(:last-child) {
                    margin-bottom: 2rem;
                }
            }
        }
    }
}

.sliderArrow {
    color: white;
    background-color: rgba(32, 32, 32, $alpha: 0.72) !important;

    &:hover {
        background-color: rgba(32, 32, 32, $alpha: 0.72) !important;
    }
}
</style>