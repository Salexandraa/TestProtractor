<template>
    <div class="container">
<div>
    <h1>{{title}}</h1>
</div>
<div>
  <reserved :listDishes= "dishesList"
  title='Замовлено'/>
  <order-issued title="Видано"/>
  <history title="Історія замовлень"/>
</div>
    </div>
</template>

<script>
import Reversed from "./Reserved"
import OrderIssued from "./OrderIssued"
import History from "./History"
    export default {
        name:"CheckList",
        components:{
            Reversed,
            OrderIssued,
            History
        },
        props: {
            // dishesList: {
            //     type: Array,
            //     default: ()=>[] 
            // },
            title:{
                type:String,
                default: ''
            }
        },
        
    }
</script>

<style lang="css" scoped>
.container{
    display: flex;
}
</style>