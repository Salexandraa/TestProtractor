<template>
  <div id="app">
    <bank-account />
    <presentation-baner
      caption="recreativ"
      imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHBi0SQnuzMLJjqD56Mrs5Ii5_w1_-RwSv0A&usqp=CAU"
      title="Соковити хурма"
    />
    <the-weather
      town="Ужгород"
      date="Сьогодні 09.00"
      temperature="+18"
      humidity="Вологість:97"
      pleasure="Тиск:748mm"
      wind="Вітер:0m/c"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BankAccount from "./components/BankAccount";
import PresentationBaner from "./components/PresentationBaner";
import TheWeather from "./components/TheWeather";


export default {
  name: "App",
  components: {
    BankAccount,
    PresentationBaner,
    TheWeather,

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
