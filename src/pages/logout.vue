<template>

</template>

<script>
  import {deleteCookie} from "@/common/js/cookies";

  export default {
    name: "logout",

    components: {},

    data() {
      return {}
    },
    async created() {
      window.localStorage.clear()
      deleteCookie('remember_token')
      this.$router.push({path: '/home'})
    },

    methods: {}
  }
</script>

<style scoped lang="scss">

</style>
