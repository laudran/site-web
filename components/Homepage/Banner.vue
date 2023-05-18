<template>
  <section class="banner d-flex align-center text-center">
    <LogoCyberCorsaire class="bannerLogo mx-auto" maxHeight="80%" height="75%" width="75%" />
  </section>
</template>
<script setup lang="ts">
  import { useDisplay } from 'vuetify/lib/framework.mjs';
  import { computed } from 'vue'

  const { name } = useDisplay()
  const imgHeight = computed((): number => {
    switch (name.value) {
      case 'xs': return 250
      case 'sm': return 350
      case 'md': return 600
      case 'lg': return 600
      case 'xl': return 600
      case 'xxl': return 600
    }
  })
  const bannerHeight = computed(() => {
    switch (name.value) {
      case 'xs': return '300px'
      case 'sm': return '350px'
      case 'md': return '550px'
      case 'lg': return '620px'
      case 'xl': return '620px'
      case 'xxl': return '620px'
    }
  })

</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: v-bind(bannerHeight);
  background: rgb(15, 8, 135);
  background-image: linear-gradient(#eef3fa, #5f88ee);
  // background: linear-gradient(0deg, rgb(77, 110, 170) 0%, rgb(77, 110, 170) 19%, rgb(174, 225, 255) 100%);

  &Logo {
    height: v-bind(imgHeight);
  }
}
</style>