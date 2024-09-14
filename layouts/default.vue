<template>
  <Header class="px-2 lg:px-8  font-sans"/>

  <main class="px-4 md:px-28 lg:px-48 min-h-screen my-16  font-sans text-neutral-900">
    <slot />
  </main>
  <Footer class="px-4 lg:px-16  font-sans" />

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
  },
})
</script>
