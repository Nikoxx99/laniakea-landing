<template>
  <base-section
    id="callout"
    class="black"
  >
    <div class="justify-center align-center text-center">
      <base-heading
        class="font-weight-bold"
        title="¿Crees que podemos mejorar?"
        align="center"
      />
      <base-body
        text="Intentamos que la experiencia usando la aplicación sea fluida y agradable. Sin embargo estamos abiertos a tus sugerencias y reportes de errores que exprimentes durante el uso."
        align="center"
      />
      <base-btn
        rounded
        color="offblack"
        dark
        href="https://laniakea.live/comentarios"
        target="_blank"
      >
        <span
          class="font-weight-medium text-none"
          v-text="`Envíanos un mensaje para mejorar ${appData.title}`"
        />
      </base-btn>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionCallout',
  }
</script>

<style lang="scss" scoped>

</style>
