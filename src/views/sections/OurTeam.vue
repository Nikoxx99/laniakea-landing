<template>
  <base-section
    id="our-team"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="Lo hacemos posible"
        align="center"
      />
      <base-divider
        color="primary"
        align="center"
      />
      <base-body
        text="Laniakea fue creado como una solución para nuestro grupo de 3 personas. Pero termino siendo algo que queremos compartir con el mundo."
        align="center"
      />
    </div>
    <v-row
      justify="center"
      align="center"
      class="px-10"
    >
      <template v-for="(employee, i) in teamMembers">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="3"
        >
          <base-team-member
            class="pa-3"
            v-bind="employee"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionOurTeam',
    data () {
      return {
        teamMembers: [
          {
            title: 'Desarrollador Principal',
            name: 'Nicolas Echeverry',
            socialLinks: [
              { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
              { link: 'https://twitter.com', icon: 'mdi-twitter' },
              { link: 'mailto:sample@example.com', icon: 'mdi-email' },
            ],
            src: require('@/assets/team-1.jpg'),
          },
          {
            title: 'Beta Tester / Co-Fundador',
            name: 'Seuseng Yong',
            socialLinks: [
              { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
              { link: 'https://twitter.com', icon: 'mdi-twitter' },
              { link: 'mailto:sample@example.com', icon: 'mdi-email' },
            ],
            src: require('@/assets/team-2.jpg'),
          },
          {
            title: 'Beta Tester',
            name: '"Subaru"',
            socialLinks: [
              { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
              { link: 'https://twitter.com', icon: 'mdi-twitter' },
              { link: 'mailto:sample@example.com', icon: 'mdi-email' },
            ],
            src: require('@/assets/team-3.jpg'),
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
