<template>
  <div id="app">
    <router-link class="link" to="/message">消息</router-link>
    <router-link class="link" to="/contacts">联系人</router-link>
    <router-link class="link" to="/discover">发现</router-link>
    <router-link class="link" to="/user">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.link {
  color: #000;
}

.router-link-exact-active {
  color: red;
}
</style>
