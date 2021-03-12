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
          <el-form-item label="验证码">
            <el-input v-model="form.code" style="width: 63%"></el-input>
            <div class="login-img">
              <img :src="codeImg" @click="getCode">
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.rememberMe">记住我</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" size="small" style="width: 100%" @click="loginIn">登录</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import background from '@/assets/login.jpg'
  import { getCodeImg, login } from "@/api/login";
  import Cookies from 'js-cookie'

  export default {
    name: "login",
    data() {
      return {
        background: background,
        form: {
          username: '',
          password: '',
          code: '',
          rememberMe: '',
          uuid: ''
        },
        codeImg: ''
      }
    },
    created() {
      this.getCode()
    },
    methods: {
      /** 获取cookie里的用户名及密码*/
      getCookie() {
        const username = Cookies.get('username')
        const password = Cookies.get('password')
        const rememberMe = Cookies.get('rememberMe')
        this.form.username = username === 'undefined'? '' : username
        this.form.password = password === 'undefined' ? '' : password
        this.form.rememberMe = rememberMe === 'undefined'? '' : rememberMe
      },
      /** 获取验证码图片*/
      getCode() {
        getCodeImg().then(res => {
          this.codeImg = res.data.img
          this.form.uuid = res.data.uuid
        })
      },
      loginIn() {
        login(this.form).then(res => {
          if (res.token !== '') {
            this.$message({
              message: '登录成功！',
              type: 'success'
            })
            this.$router.replace('/Layout')
          }
        }).catch(err => {
          this.$message({
            message: err,
            type: 'error'
          })
        })
      }
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
    border: 1px solid #9c763e;
    padding: 30px 40px;
    border-radius: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      color: #fff;
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 30px;
      text-align: center;
    }
    .login-img {
      width: 33%;
      height: 40px;
      display: inline-block;
      float: right;
      img{
        width: 100%;
        cursor: pointer;
        vertical-align:middle
      }
    }
  }
</style>
