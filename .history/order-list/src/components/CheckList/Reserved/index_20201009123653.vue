<template>
    <div>
<div>
    <h1>{{title}}</h1>
</div>
<div>
    <!-- <input type="checkbox" v-for="item in listDishes" :key="item.name"> -->
    <ul>
        <li v-for="item in listDishes" :key="item.name" > 
          {{item.name}}  <input type="checkbox" >
        </li>
        
    </ul>
</div>
<hr>
<!-- <div>
      <ul>
        <li  > {{order}}
            <input type="checkbox" >
        </li>
        
    </ul>

</div> -->
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
            // data() {
            //     return {
            //         order: null
            //     }
            // },
            

        },
    }
</script>

<style lang="scss" scoped>

</style>