<template>
  <div id="app">
      <login-homework 
      :logins-list = "myUserList"
      image =  "@/assets/smile.jpg"/>
  </div>
</template>

<script>
import LoginHomework from './components/LoginHomework'
import myUserList from "./setings"

export default {
  name: 'App',
  components: {
    LoginHomework
  },
   data() {
    return {
      myUserList,
    }
   },
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
