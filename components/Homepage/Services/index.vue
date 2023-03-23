<template>
    <section class="sectionServices">
        <v-container fluid>
            <v-tabs fixed-tabs v-model="serviceTab" color="white" class="sectionServicesTabs" slider-color="blue" grow>
                <v-tab selected-class="sectionServicesTabsSelected" color="black" slider-color="blue" value="professional">
                    Professionnels
                </v-tab>
                <v-tab selected-class="sectionServicesTabsSelected" color="black" slider-color="blue" value="individual">
                    Particuliers
                </v-tab>
            </v-tabs>

            <v-window v-model="serviceTab">
                <v-window-item value="professional">
                    <HomepageServicesProfessional />
                </v-window-item>
                <v-window-item value="individual">
                    <HomepageServicesIndividual />
                </v-window-item>
            </v-window>
        </v-container>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useDisplay } from 'vuetify/lib/framework.mjs';
    import { computed } from 'vue';


    const serviceTab = ref(0);


    const { name } = useDisplay()
    const servicesHeight = computed(() => {
        switch (name.value) {
            case 'xs': return '750px'
            case 'sm': return '680px'
            case 'md': return '630px'
            case 'lg': return '630px'
            case 'xl': return '630px'
            case 'xxl': return '630px'
        }
    })
</script>

<style lang="scss" scoped>
.sectionServices {
    width: 100%;
    background-color: rgb(5, 2, 3);
    padding-top: 1rem;
    min-height: v-bind(servicesHeight);

    &Tabs {
        button {
            background-color: white;
            color: black;
            min-width: 36%;
        }

        &Selected {
            background-color: #5f88ee !important;
        }
    }

    &Card {
        background-color: inherit;
        color: white;
    }

}
</style>