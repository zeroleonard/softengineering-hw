<template>
  <div class="home">
    <div v-if="this.$store.state.isLogin===true">
      已经登陆！
    </div>
    <div v-else>
      尚未登陆，请前往登陆<router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
}
</script>
