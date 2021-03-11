<template>
  <div style="height: 100%;">
    <div class="login" :style="'background-image:url('+background+')'">
      <div class="loginForm">
        <div class="title">海星空间站</div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号：">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" style="width: 100%">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import background from '@/assets/login.jpg'
  export default {
    name: "login",
    data() {
      return {
        background: background,
        form: {
          username: '',
          password: ''
        }
      }
    },
    created() {
      console.log(111)
    }
  }
</script>

<style lang="less" scoped>
.login {
  position: relative;
  height: 100%;
  background-size: 100% 100%;
}
  .loginForm {
    position: absolute;
    width: 25%;
    border: 1px solid #409EFF;
    padding: 30px 40px;
    border-radius: 20%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      color: #fff;
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
</style>
