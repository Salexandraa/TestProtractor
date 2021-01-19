<template>
  <div id="app">
  <reserved :listDishes= "dishesList"
  title='Замовлено'

  />
  </div>
</template>

<script>
import Reserved from "./components/CheckList/Reserved";
import dishesList from "../settings"
export default {
  name: "App",
  components: {
    Reserved,
  },
  data() {
    return {
      dishesList
      // dishesList: [
      //   {
      //     id: 1,
      //     name: "Pizza",
      //   },
      //    {
      //     id: 2,
      //     name: "Pasta",
      //   },
      //    {
      //     id:3,
      //     name: "Rizzoto",
      //   },
      //    {
      //     id: 4,
      //     name: "Minestrone soup",
      //   },
      //    {
      //     id:5,
      //     name: "Onion soup",
      //   },
      // ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
