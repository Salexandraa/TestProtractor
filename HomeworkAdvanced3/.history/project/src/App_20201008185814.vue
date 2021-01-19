<template>
  <div id="app">
      <login-homework :logins-list = "myUserList"/>
  </div>
</template>

<script>
import LoginHomework from './components/LoginHomework'

export default {
  name: 'App',
  components: {
    LoginHomework
  }
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
</style>
