<template>
    <div class="container">
<div>
    <h1>{{title}}</h1>
</div>
<div> <ul  :v-model="chekedNames" >
        <li v-for="item in listDishes" :key="item.name" v-bind:name="item.name"  > 
          {{item.name}}  <input type="checkbox"   >
        </li>
        
    </ul> 
</div>
<hr>
<div>
      <ul>
        <li  > 
           {{checkedNames}} <input type="checkbox" >
        </li>
        
    </ul>

</div>
    </div>
</template>

<script>
    export default {
        name: "Reserved",
        props: {
             listDishes: {
                type: Array,
                default: ()=>[]
            },
            title: {
                type: String,
                default: ''
            }
            },
            data() {
                return {
                    chekedNames: ''
                }
                },
  
    }
</script>

<style lang="css" scoped>
.container{
    width: 300px;
    height: 500px;
    border: 2px solid;
    border-radius: 15px;
}
</style>