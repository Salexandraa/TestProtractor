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
import Reserved from "./Reserved"
import OrderIssued from "./OrderIssued"
import History from "./History"
    export default {
        name:"CheckList",
        components:{
            Reserved,
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
    border: 1px solid;
    text-align: center;
   display: inline-block;
   justify-content: center;
   margin: 10px;

   

}
</style>