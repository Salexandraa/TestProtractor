<template>
  <div class="container">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <reserved
        title="Замовлено"
        title2="Приготовлено"
        :listDishes="dishesList"
        @selected="Selected"
        :listDishesPrepare="listDishesPrepare"
        @prepare="Prepared"
      />

      <order-issued
        title="Видано"
        :listDishes2="dishesList2"
        @issued="Issued"
      />

      <history title="Історія замовлень" :listDishes3="dishesList3" />
    </div>
  </div>
</template>

<script>
import Reserved from "./Reserved";
import OrderIssued from "./OrderIssued";
import History from "./History";
import dishesList from "../../../settings";
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
      listDishesPrepare: [],
      dishesList2: [],
      dishesList3: [],
     
    };
  },
  methods: {
    Selected(index) {
      this.listDishesPrepare.push(this.dishesList[index]);
    },
    Prepared(index) {
      
      if (this.dishesList2) {
        this.dishesList2.push(this.listDishesPrepare[index]);
        this.dishesList2 = ""
      }

    },
    Issued(index) {
      this.dishesList3.push(this.dishesList2[index]);

    },
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
