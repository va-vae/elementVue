<template>
  <el-container style="height: 100%">
    <el-aside width="200px">
      <el-menu default-active="1" class="el-menu-vertical-demo"
               background-color="#545c64"
               text-color="#fff" active-text-color="#ffd04b" :router="true">
        <span v-for="(item, index) in route" :key="index">
          <el-submenu v-if="item.children" :index="item.path">
            <template slot="title">{{item.meta.title}}</template>
            <el-menu-item v-for="(ite, ind) in item.children" :key="ind" :index="`${item.path}/${ite.path}`" >{{ite.meta.title}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="item.path">{{item.meta.title}}</el-menu-item>
        </span>
      </el-menu>
    </el-aside>
    <el-main style="background-color: #9c763e">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import router from '@/router/index'
  export default {
    name: "index",
    data() {
      return {}
    },
    computed: {
      route() {
        return router.options.routes.filter(item => item.hidden !== true)
      }
    },
    created() {
      console.log(router.options.routes)
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
