<template>
    <div class="container">
   <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <ol>
        <li v-for="item in dishesList" :key="item.name">
          {{ item.name }} <input type="checkbox" v-model="item.names" />
        </li>
      </ol>
    </div>
    <hr>
    </div>
</template>

<script>
    export default {
        name: "History",
        props: {
            title: {
                type: String,
                default: ""
            },
        },
    }
</script>

<style lang="css" scoped>
.container {
  width: 300px;
  height: 500px;
  border: 2px solid;
  border-radius: 15px;
}

</style>