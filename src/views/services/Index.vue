<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Services',

    metaInfo: { title: 'Services' },

    extends: View,

    mixins: [
      LoadSections([
        'our-services',
        'why-choose-us',
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
