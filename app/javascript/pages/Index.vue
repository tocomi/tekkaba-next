<template lang="pug">
  v-app#inspire
    v-navigation-drawer(v-model="drawer" clipped fixed app)
      v-list(dense)
        v-list-tile(@click="hello('dashboad')")
          v-list-tile-action
            v-icon dashboard
          v-list-tile-content
            v-list-tile-title Dashboard
        v-list-tile(@click="hello('settings')")
          v-list-tile-action
            v-icon settings
          v-list-tile-content
            v-list-tile-title Settings
    v-toolbar(app fixed clipped-left)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title tekkaba-next
    v-content
      v-container(fluid fill-height)
        v-layout(justify-center align-center)
          v-flex(shrink)
            v-tooltip(right)
              v-btn(slot="activator" :href="source" icon large target="_blank")
                v-icon(large) code
              span Source
            v-tooltip(right)
              v-btn(slot="activator" icon="" large="" href="https://codepen.io/johnjleider/pen/qxQWda" target="_blank")
                v-icon(large) mdi-codepen
              span Codepen
    v-footer(app fixed)
      span © 2017
</template>

<script lang="ts">
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    },
    methods: {
      hello(message: string) {
        alert(message)
      }
    }
  }
</script>