<template>
  <div id="app">
      <login-homework 
      :logins-list = "myUserList"
      image =  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0_R735DH-6lKQ08A0MzDF34Lnrd2VJYQ-VA&usqp=CAU"/>
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
