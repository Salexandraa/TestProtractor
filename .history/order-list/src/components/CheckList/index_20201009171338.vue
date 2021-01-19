<template>
  <div class="container">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <reserved :listDishes="dishesList" title="Замовлено" />
      <order-issued title="Видано" />
      <history title="Історія замовлень" />
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
    // dishesList: {
    //     type: Array,
    //     default: ()=>[]
    // },
    title: {
      type: String,
      default: "",
    },
    },
    data() {
        return {
            dishesList
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
  margin: 10px;
}
</style>
