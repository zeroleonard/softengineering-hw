<template>
  <div class="login">
    <el-button type="primary" v-if="this.$store.state.isLogin===false" @click="click_login">登陆</el-button>
    <el-button type="info" v-if="this.$store.state.isLogin===true" @click="click_logout">退出登陆</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    click_login() {
      this.$store.commit('login');
    },
    click_logout() {
      this.$store.commit('logout');
    }
  }
}
</script>