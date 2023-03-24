<template>
    <v-row no-gutters>
        <v-col md="10" offset-md="1">
            <v-card flat class="professionalServices">
                <v-card-text>
                    <v-row align="start" no-gutters class="professionalServicesDescription">
                        <v-col cols="12" sm="12" md="5" class="text-center professionalServicesDescriptionAvatar">
                            <v-avatar :size="imgHeight" image="/img/sopraSteria.jpg" />
                        </v-col>
                        <v-col cols="12" sm="12" md="7">
                            <v-card flat class="professionalServicesDescriptionText">
                                <v-card-text class="professionalServicesDescriptionTextItem"
                                    v-for="(item, index) in serviceList" :key="index">
                                    {{ item.title }}
                                </v-card-text>
                                <v-card-actions class="professionalServicesDescriptionTextNote">
                                    Pour toute autre demande n'hésitez pas à nous contacter.
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
    import { useDisplay } from 'vuetify/lib/framework.mjs';
    import { computed } from 'vue';
    import InetumIcon from '@/components/Logo/Inetum.vue';
    import ArmyIcon from '@/components/Logo/Army.vue';
    import AuchanIcon from '@/components/Logo/Auchan.vue';
    import BlanchePorteIcon from '@/components/Logo/BlanchePorte.vue';

    const references = [
        InetumIcon,
        ArmyIcon,
        AuchanIcon,
        BlanchePorteIcon
    ]

    const serviceList = [
        {
            title: "Protégez votre entreprise avec nos services d'intégration d'outils de sécurité informatique. Nous offrons une gamme complète de solutions de sécurité, y compris l'antivirus, l'EDR, l'XDR, le bastion et le firewall, pour vous aider à prévenir les cyberattaques.",
            id: 1
        },
        {
            title: "Nous proposons une gamme de tarifs flexibles pour répondre à vos besoins. Notre offre SaaS est idéale pour les entreprises qui préfèrent payer un abonnement mensuel pour un accès facile et immédiat à nos outils de sécurité. Si vous préférez externaliser votre sécurité informatique, nous proposons également une offre en infogérance, où notre équipe d'experts en sécurité surveillera et protégera votre entreprise 24h/24 et 7j/7",
            id: 2
        },
        {
            title: "Enfin, pour les entreprises qui ont besoin d'une assistance technique régulière, nous proposons des forfaits d'assistance technique pour vous aider à maintenir vos outils de sécurité à jour, à optimiser leur efficacité ou vous accompagner dans la sécurisation de votre infrastructure.",
            id: 3
        },
        {
            title: "Nos services d'intégration d'outils de sécurité informatique sont conçus pour être efficaces, abordables et faciles à utiliser. Protégez votre entreprise dès aujourd'hui en nous contactant pour en savoir plus sur nos offres et nos tarifs.",
            id: 4
        },
    ]
    const { name } = useDisplay()
    const imgHeight = computed(() => {
        switch (name.value) {
            case 'xs': return 200
            case 'sm': return 216
            case 'md': return 232
            case 'lg': return 232
            case 'xl': return 232
            case 'xxl': return 232
        }
    })

    const avatarMargin = computed(() => {
        return 'xs' === name.value || 'sm' === name.value ? '0 0 2rem 0' : 'auto'
    })

</script>

<style scoped lang="scss">
.professionalServices {
    background-color: inherit;
    color: white;

    .body-1 {
        font-size: 1rem;
        color: white;
    }

    &Description {
        margin: 2rem 0;

        &Text {
            background-color: inherit;
            font-size: 16px;

            &Title {
                padding: 0.275rem;
                color: white;
                text-overflow: clip;
                white-space: pre-wrap;
            }

            &Item {
                padding: 0.275rem;
                color: white;
                font-size: 16px;
            }

            &Note {
                padding: 0.275rem;
                margin-top: 1.25rem;
                color: white;
            }

            &Avatar {
                margin: v-bind(avatarMargin);
            }
        }
    }

    &Reference {
        &Title {
            // font-size: ;
            word-wrap: normal;
            margin-bottom: 2rem;
        }
    }
}
</style>