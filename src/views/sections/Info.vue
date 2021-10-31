<template>
  <base-section class="offblack">
    <v-theme-provider dark>
      <v-row
        no-gutters
        class="px-12"
        align="start"
        justify="center"
      >
        <v-col
          cols="12"
          md="3"
          class="px-3"
        >
          <base-subheading :title="`Sobre ${appData.title}`" />
          <base-divider
            color="white"
            align="left"
          />
          <base-body text="Laniakea esta desarrollado en VueJS (NuxtJS SSR) y tecnologias modernas de Javascript. No almacenamos información de los videos reproducidos ni incitamos a la pirateria de contenido con derechos de autor. Nuestra plataforma esta pensada para sincronizar videos de caracter personal." />
          <base-body text="¿Te interesa nuestro proyecto y deseas apoyarnos? escríbenos a nuestro email team@laniakea.live" />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="3"
          class="px-3"
        >
          <base-subheading title="Changelog / Actualizaciónes" />
          <base-divider
            color="white"
            align="left"
          />
          <template v-for="(news, i) in appData.recentNews">
            <base-body
              :key="`news-text-${i}`"
              tag="div"
              space="0"
              class="py-3"
              :text="news"
            />
            <v-divider :key="`news-divider-${i}`" />
          </template>
        </v-col>
        <v-col
          cols="12"
          md="3"
          class="px-3"
        >
          <base-subheading title="Contactanos" />
          <base-divider
            color="white"
            align="left"
          />
          <base-subtitle
            title="Email:"
            weight="bold"
          />
          <base-body
            space="2"
            :text="`team@${appData.title.toLowerCase()}.live`"
          />
          <base-subtitle
            title="Twitter:"
            weight="bold"
          />
          <base-body
            space="2"
            text="@laniakea"
          />
          <base-subheading title="Una aplicación de la familia Fenix" />
          <base-divider
            color="white"
            align="left"
          />
          <base-btn
            v-for="media in appData.socialLinks"
            :key="media.link"
            :href="media.link"
            target="_blank"
            class="ma-1"
            min-width="40px"
            width="40px"
            depressed
            :color="media.color"
            :icon="media.icon"
          />
        </v-col>
      </v-row>
    </v-theme-provider>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionInfo',
  }
</script>

<style lang="scss" scoped>

</style>
