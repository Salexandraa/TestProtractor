<template>
  <div class="container">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <reserved :listDishes="dishesList" :listDishesPrepare="listDishesPrepare" title="Замовлено" title2="Приготовлено" />
      <order-issued title="Видано" :listDishes2="dishesList2"/>
      <history title="Історія замовлень" :listDishes3="dishesList3" />
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
            dishesList,
            listDishesPrepare:[],
            dishesList2: [],
            dishesList3: []
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
