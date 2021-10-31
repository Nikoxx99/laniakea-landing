<template>
  <base-section
    id="story-alt"
    class="grey lighten-4"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          :min-height="$vuetify.breakpoint.mdAndUp ? '500px' : '200px'"
          :height="$vuetify.breakpoint.mdAndUp ? '500px' : '200px'"
          :min-width="$vuetify.breakpoint.mdAndUp ? '600px' : '300px'"
          :src="require('@/assets/about/clay-banks-LjqARJaJotc-unsplash.jpg')"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="px-10"
      >
        <base-heading
          class="font-weight-bold py-3"
          title="Our Values"
          align="left"
        />
        <base-body
          text="Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue."
        />
        <base-btn
          class="my-10 elevation-0 mx-1"
          rounded
          color="black"
          dark
          depressed
          href="https://store.vuetifyjs.com/products/flairo-theme-pro"
          target="_blank"
        >
          <span
            class="font-weight-black text-none"
            v-text="`Purchase ${appData.title}`"
          />
        </base-btn>
        <base-btn
          rounded
          class="my-10 elevation-0 mx-1"
          depressed
        >
          <span
            class="font-weight-black text-none"
            v-text="'Learn More'"
          />
        </base-btn>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionStoryAlt',
    data () {
      return {
        features: [
          {
            icon: 'mdi-flash',
            title: 'Fast',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-cog',
            title: 'Customizable',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-responsive',
            title: 'Responsive',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-face-agent',
            title: 'Friendly Support',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
