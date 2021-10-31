<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Laniakea - Sincroniza tu pasión' },

    extends: View,

    mixins: [
      LoadSections([
        'hero',
        'welcome-features',
        'flexible-callout',
        'our-team',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
