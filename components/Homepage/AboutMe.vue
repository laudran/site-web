<template>
    <section id="aboutMe" class="aboutMe">
        <v-row dense align="center">
            <v-col cols="12" sm="4" md="5" class="aboutMePicture text-center">
                <v-avatar :size="imgHeight" class="aboutMePictureAvatar" image="/img/profilePicture.jpg" />
            </v-col>
            <v-col cols="12" sm="8" md="7">
                <v-card flat :min-height="cardHeight">
                    <v-tabs v-model="tab" color="black" class="aboutMeTabs">
                        <v-tab color="black" v-for="(item, index) in aboutMeTexts" :key="index" :value="index">
                            {{ item.language }}
                        </v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item v-for="(item, index) in aboutMeTexts" :key="index" :value="index">
                                <v-card flat>
                                    <v-card-text>
                                        <v-row align="start" no-gutters>
                                            <v-col class="text-h4 text-left aboutMeTitle mb-4" cols="12">
                                                {{ item.label }}

                                            </v-col>
                                            <v-col cols="12" class="aboutMeText text-left">
                                                <p>{{ item.firstLine }} <br /> {{ item.secondLine }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                    <v-card-actions class="aboutMeSocialIcons">
                        <v-btn class="linkedinButton" size="small" icon target="_blank" data-type="LinkedIn"
                            title="LinkedIn" href="https://www.linkedin.com/in/jeremy-benallal/">
                            <IconsLinkedinIcon />
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script setup lang="ts">

    import { computed } from 'vue';
    import { useDisplay } from 'vuetify/lib/framework.mjs';
    import { ref } from 'vue'

    const aboutMeTexts = [
        {
            language: 'Français',
            label: 'A propos de moi',
            firstLine: "Ancien militaire spécialisé en cyberdéfense (détection, remédiation, gestion de crise, audit, etc…), je travaille avec des entreprises de toutes tailles ayant la volonté d’améliorer leur niveau de sécurité, ou de bénéficier de mon expérience en matière de sécurité opérationnelle.",
            secondLine: 'Aujourd’hui, je suis en Guadeloupe et je cherche à utiliser ces compétences pour accompagner les entreprises et structures des Antilles vers un meilleur niveau de cybersécurité.'
        },
        {
            language: 'English',
            label: 'About me',
            firstLine: "Former soldier specialized in cyber defense (detection, remediation, crisis management, audit, etc…) I work with companies of all sizes willing to improve their level of security, or to benefit from my experience in operational security.",
            secondLine: "Today, I'm in Guadeloupe and use these skills to support companies and entities in the West Indies to reach a better level of cybersecurity."
        },
        {
            language: 'Kréyol',
            label: 'Anlè mwen',
            firstLine: "Ansyen militè espésyalizé an cyberdéfans (détèksyon, ratrapaj, jèsyon kriz, odit, etc...) Mwen ka travay avè konpani tout gwosè ki vlé amélyoré nivo a sékirite a yo, ou byen benefisyé de èksperyans mwen an sékirité operasyonèl.",
            secondLine: "Jodi a, mwen an Gwadloup é mwen ka chèché sèvi konpetans en mwen pou sipòte konpani é strikti dé Zantiy pou yo pi bon nivo an cybersecurité la."
        },
    ];
    const tab = ref(0);
    const { name } = useDisplay()
    const imgHeight = computed(() => {
        switch (name.value) {
            case 'xs': return 180
            case 'sm': return 180
            case 'md': return 350
            case 'lg': return 400
            case 'xl': return 400
            case 'xxl': return 400
        }
    })
    const cardHeight = computed(() => {
        switch (name.value) {
            case 'xs': return 450
            case 'sm': return 400
            case 'md': return 350
            case 'lg': return 400
            case 'xl': return 400
            case 'xxl': return 400
        }
    })

    const scrollToComponent = () => {

    } 
</script>

<style lang="scss" scoped>
.aboutMe {
    padding: 2rem;
    width: 100%;

    &Tabs {
        color: black;
    }

    &Title {
        font-weight: 700;
    }

    &Picture {
        &Avatar {
            margin: auto;
        }
    }

    &SocialIcons {
        position: absolute;
        bottom: 0;
    }

    .linkedinButton {
        font-size: 2rem;

        svg {
            color: rgb(14, 118, 168);
            width: 2rem;
        }
    }
}
</style>