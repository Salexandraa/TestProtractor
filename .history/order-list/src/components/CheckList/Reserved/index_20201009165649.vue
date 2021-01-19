<template>
    <div class="container">
<div>
    <h1>{{title}}</h1>
</div>
 <div><ol >
        <li v-for="item in listDishes" :key="item.name" value="item.name"  > 
          {{item.name}}  <input type="checkbox"  v-model="item.names"  >
        </li>      
    </ol> 
</div>
<hr>
<div>
      <ol>
        <li v-for="item in listDishes" :key="item.id" > 
           {{item.names}} <input type="checkbox" >
        </li>
        
    </ol> 

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
                default: '',
                
            },
        }
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