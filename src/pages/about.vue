<template>
  <div class="about">
    <div v-html="about"></div>
  </div>
</template>

<script>
  import {getAbout} from "@/api/account_api";
  export default {
    name: "about",

    components: {
    },
    data() {
      return {
        about: ''

      }
    },
    async created() {
      const res = await getAbout()
      this.about = res.ono_about_project
    },

    methods: {

    }
  }
</script>

<style lang="scss">
  .about {
    padding: 20px;
  }
</style>
