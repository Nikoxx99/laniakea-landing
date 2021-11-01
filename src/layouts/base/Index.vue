<template>
  <v-app>
    <app-bar
      block
      search
    />
    <base-view />
  </v-app>
</template>

<script>
  export default {
    name: 'BaseLayout',

    components: {
      AppBar: () => import('@/layouts/base/AppBar'),
      BaseView: () => import('@/layouts/base/View'),
    },
  }
</script>
