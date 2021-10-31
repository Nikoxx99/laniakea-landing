<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Comentarios',

    metaInfo: { title: 'Comentarios' },

    extends: View,

    mixins: [
      LoadSections([
        'get-in-touch',
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
