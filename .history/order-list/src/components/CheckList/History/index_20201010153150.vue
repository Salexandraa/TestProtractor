<template>
    <div class="container">
   <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <ol>
        <li v-for="(item,ind )in listDishes3" :key="ind">
          {{ item.name }} />
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
             listDishes3: {
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
  background-color: skyblue;
}

</style>