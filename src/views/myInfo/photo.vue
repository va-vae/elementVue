<template>
  <div>我的相册</div>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: "photo",
    beforeRouteEnter(to, from, next) {
      console.log(Cookies.get('token'))
      if (Cookies.get('token') !== '') {
        next()
      }else {
        next('/login')
      }
    }
  }
</script>

<style scoped>

</style>
