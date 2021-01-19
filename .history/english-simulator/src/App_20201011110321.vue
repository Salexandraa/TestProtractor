<template>
  <div id="app">
    <english-simulator />
  </div>
</template>

<script>
import EnglishSimulator from './components/EnglishSimulator'

export default {
  name: 'App',
  components: {
   EnglishSimulator
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
