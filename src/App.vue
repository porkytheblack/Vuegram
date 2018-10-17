<template>
  <div id="app">
    <Navigation v-if="currentUser"></Navigation>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
