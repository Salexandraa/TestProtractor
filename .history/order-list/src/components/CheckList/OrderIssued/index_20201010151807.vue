<template>
  <div class="container">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <ol>
        <li v-for="(item , ind) in dishesList" :key="ind">
          {{ item.name }} 
          <button>Видано</button> />
        </li>
      </ol>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  name: "OrderIssued",
 
  props: {
    title: {
      type: String,
      default: "",
    },
      listDishes:{
        type:Array,
        default:()=>[]
      }
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
