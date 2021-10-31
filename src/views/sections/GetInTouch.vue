<template>
  <base-section
    id="get-in-touch"
    class="black"
  >
    <v-row align="start">
      <v-col
        cols="3"
        sm="6"
        class="px-12"
      >
        <base-subheading
          class="font-weight-black primary--text"
          title="Escribenos"
          align="left"
        />
        <base-body
          text="Si tienes sugerencias o algun reporte de errores puedes comentarlos aquí."
          align="left"
        />
      </v-col>
      <v-col
        cols="9"
        sm="6"
      >
        <base-subheading
          class="font-weight-black primary--text"
          title="Chat gracias a Disquss"
          align="left"
        />
        <div
          id="disqus_thread"
          style="padding-right:40px"
        />
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionGetInTouch',
    data () {
      return {
        name: '',
        email: '',
        website: '',
        subject: '',
        message: '',
      }
    },
    mounted () {
      this.$loadScript('https://laniakealive.disqus.com/embed.js')
    },
  }
</script>

<style lang="scss" scoped>

</style>
