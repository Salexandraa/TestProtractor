<template>
    <div class="container">
<div>
    <h1>{{title}}</h1>
</div>
 <div><!-- <ol   >
        <li v-for="item in listDishes" :key="item.name"   > 
          {{item.name}}  <input type="checkbox" :v-model="chekedNames"   >
        </li>
        
    </ol>  -->

    <select v-model="chekedNames">
  <option v-for="item in listDishes" v-bind:name="item.name" :key="item.name">
    {{ item.name }}
  </option>
</select>

</div>
<hr>
<div>
    <span>Выбрано: {{ checkedNames }}</span>
      <!-- <ul>
        <li  > 
           {{checkedNames}} <input type="checkbox" >
        </li>
        
    </ul> -->

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
                // methods: {
                //     addDish() {
                //         if(this.chekedNames === true)
            
                        
                //     }
                // },
  
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