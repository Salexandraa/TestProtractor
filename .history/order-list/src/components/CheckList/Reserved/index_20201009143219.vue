<template>
    <div class="container">
<div>
    <h1>{{title}}</h1>
</div>
<div> <ul  >
        <li v-for="item in listDishes" :key="item.name" :v-model="chekedNames"  > 
          {{item.name}}  <input type="checkbox"  >
        </li>
        
    </ul> 
</div>
<hr>
<div>
      <ul>
        <li > 
            {{chekedNames}} <input type="checkbox" >
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
            },
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