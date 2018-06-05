<template>
  <div class="about">
    <div v-html="about"></div>
  </div>
</template>

<script>
  import {getAccountInfo} from "@/api/account_api";
  import {getAbout} from "@/api/account_api";

  export default {
    name: "about",

    components: {},

    data() {
      return {
        about: ''
      }
    },
    async created() {
      const res = await getAbout()
      this.about = res.ono_about_project
    },

    methods: {}
  }
</script>

<style scoped lang="scss">
  .about {
    padding: 20px;
  }
</style>
