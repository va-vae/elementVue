<template>
  <div>我的相册</div>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: "photo",
    beforeRouteEnter(to, from, next) {
      if (Cookies.get('token')) {
        next()
      } else {
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>

</style>
