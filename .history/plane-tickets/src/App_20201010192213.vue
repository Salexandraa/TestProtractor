<template>
  <div id="app">
   <ticket/>
  </div>
</template>

<script>
import Ticket from './components/Ticket'

export default {
  name: 'App',
  components: {
    Ticket
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
