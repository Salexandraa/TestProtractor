<template>
  <div id="app">
  <check-list title="Чек лист"/>
  </div>
</template>

<script>
import CheckList from "./components/CheckList"
export default {
  name: "App",
  components: {
    CheckList
  },
};
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
