<template>
  <div class="container">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
        <reserved :listDishes="dishesList" />
      <ol>
        <li v-for="item in listDishes" :key="item.name">
          {{ item.name }} <input type="checkbox" v-model="item.names" />
        </li>
      </ol>
    </div>
    <hr>
  </div>
</template>

<script>
import Reserved from "../Reserved"
export default {
  name: "OrderIssued",
  components:{
      Reserved
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  width: 300px;
  height: 500px;
  border: 2px solid;
  border-radius: 15px;
  background-color: skyblue;
}
</style>
