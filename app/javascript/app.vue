<template>
  <v-app>
    <v-content>
      <Index/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Index from './pages/Index.vue'

export default {
  name: 'App',
  components: {
    Index,
  },
  data () {
    return {
      //
    }
  }
}
</script>
