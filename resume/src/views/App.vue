<template>
  <topnav></topnav>
  <a v-link="{ path: '/profile'}" href="">go to profile</a>
    <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
    "topnav": require("../components/_topnav.vue")
  }
}
</script>

<style lang="sass">

* {
  margin: 0;
  padding: 0;
}
</style>
