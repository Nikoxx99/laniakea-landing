<template>
  <base-section
    id="hero"
    space="0"
  >
    <v-img
      :src="require('@/assets/background.png')"
      min-height="695px"
    >
      <v-theme-provider dark>
        <v-container class="fill-height px-5 py-12">
          <v-responsive
            class="d-flex align-center justify-center"
            height="100%"
            width="99%"
          >
            <v-row align="center">
              <v-col
                cols="12"
                md="6"
              >
                <base-heading
                  class="text-uppercase font-weight-bold"
                  :title="`¿Qué es ${appData.title}?`"
                />
                <base-subheading
                  title="Sincroniza tus videos favoritos con tus amigos en segundos."
                />
                <p>Del hawaiano Laniakea, ‘cielos inconmensurables’</p>
                <base-body
                  text="Te permite compartir un momento agradable con tus amigos sin preocuparte por velocidades lentas de internet."
                />
                <base-btn
                  rounded
                  height="50px"
                  color="white"
                  class="primary--text font-weight-bold text-none mr-4 mb-1"
                  href="https://app.laniakea.live"
                  target="_blank"
                >
                  <span v-text="`Iniciar ${appData.title}`" />
                </base-btn>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-img
                  class="floating-island"
                  :src="require('@/assets/camping.svg')"
                  min-height="565px"
                  max-width="850px"
                />
              </v-col>
            </v-row>
          </v-responsive>
        </v-container>
      </v-theme-provider>
    </v-img>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionHero',
  }
</script>

<style lang="scss" scoped>
  .floating-island {
    animation: floatAnim 6s ease-in-out infinite;
  }

  @keyframes floatAnim {
    0% {
      transform: translate(1px,3px);
    }
    50% {
      transform: translate(1px,18px);
    }
    100% {
      transform: translate(1px,3px);
    }
  }
</style>
