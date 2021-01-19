<template>
  <div class="container">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <reserved :listDishes="dishesList" title="Замовлено" title2="Приготовлено" />
      <order-issued title="Видано" :listDishes2="listDishes2"/>
      <history title="Історія замовлень" :listDishes3="listDishes3" />
    </div>
  </div>
</template>

<script>
import Reserved from "./Reserved";
import OrderIssued from "./OrderIssued";
import History from "./History";
import dishesList from "../../../settings"
export default {
  name: "CheckList",
  components: {
    Reserved,
    OrderIssued,
    History,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    },
    data() {
        return {
            listDishes,
            listDishes2,
            listDishes3
        }
    
  },
};
</script>

<style lang="css" scoped>
.container {
  border: 1px solid;
  border-radius: 15px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
}
</style>
