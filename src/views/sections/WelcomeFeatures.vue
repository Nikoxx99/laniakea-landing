<template>
  <base-section
    id="welcome-feature"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        :title="`Bienvenido a ${appData.title}`"
        align="center"
      />
      <base-divider
        color="primary"
        align="center"
      />
      <base-body
        text="¿Tu y tus amigos tienen el mismo video y lo quieren ver a la vez?"
        align="center"
      />
    </div>
    <v-row
      justify="center"
      align="center"
      class="px-10"
    >
      <template v-for="(feature, i) in features">
        <v-col
          :key="i"
          cols="12"
          md="3"
        >
          <base-feature
            class="pa-3"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionWelcomeFeatures',
    data () {
      return {
        features: [
          {
            icon: 'mdi-account',
            title: 'Inicia tu cuenta',
            text: 'Crea una cuenta o inicia sesión si ya tienes una.',
          },
          {
            icon: 'mdi-cog',
            title: 'Crea una sesión única',
            text: 'Selecciona un rol (Organizador o Participante).',
          },
          {
            icon: 'mdi-share',
            title: 'Comparte el link',
            text: 'Pásale el codigo único generado para tu sesión a tus amigos.',
          },
          {
            icon: 'mdi-play',
            title: '¡Diviértete!',
            text: 'Laniakea usará tecnología de WebSockets para sincronizar lo que tu y tus amigos estan viendo.',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
