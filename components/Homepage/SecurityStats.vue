<template>
    <section class="securityStats">
        <v-container>
            <v-row dense>
                <v-col cols="12" class="securityStatsDescription">
                    Aujourd'hui, toutes les entreprises peuvent être ciblées par les attaques informatiques. Malgré ce
                    que l'on peut penser, les grandes entreprises ne sont pas les plus ciblées: en effet, une PME ou une
                    startup n'ayant pas un niveau de sécurité suffisant est bien plus vulnérable et représente une cible
                    facile pour un pirate ou pour une organisation criminelle.
                </v-col>
                <v-col v-for="(item, index) in stats" :key="index">
                    <v-card flat class="securityStatsItem">
                        <v-card-text>
                            <v-row align="center" no-gutters>
                                <v-col class="text-h2 text-center securityStatsItemTitle" cols="12">
                                    <Vue3Autocounter ref="item.name" :startAmount="0" :endAmount="item.number" :duration="2"
                                        suffix='%' :autoinit='true' />
                                </v-col>
                                <v-col cols="12" class="text-center">
                                    {{ item.description }}
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row align="end" no-gutters>
                <v-col cols="12" class="text-right">
                    Source : <a class="linkReference"
                        href="https://globbsecurity.fr/5-statistiques-sur-la-cybersecurite-que-chaque-pme-doit-connaitre-en-2022-47925/"
                        target="_blank">globbsecurity.fr</a>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script setup lang="ts">
    import Vue3Autocounter from 'vue3-autocounter';
    const stats = [
        {
            name: "vulnerableCompanies",
            number: 93,
            description: "Les pirates informatiques peuvent pénétrer dans au moins 93% des réseaux d'entreprise."
        },
        {
            name: "victimNumber",
            number: 40,
            description: "40% des PME qui ont été confrontées à une cyberattaque ont connu au moins huit heures d'interruption d’activité."
        },
        {
            name: "smallTarget",
            number: 43,
            description: "43% des cyberattaques visent les petites entreprises"
        }
    ]
</script>
<style lang="scss" scoped>
.securityStats {
    width: 100%;
    background-color: black;
    padding: 2rem 0;
    color: white;

    &Item {
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        flex-direction: column;

        &Title {
            font-size: 4.5rem;
            font-weight: 700;
            color: #5f88ee
        }
    }

    &Description {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.25rem;

    }
}

.linkReference {
    color: rgb(59, 120, 211);
}
</style>