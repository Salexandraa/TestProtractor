<template>
    <div class="container">
<div>
    <h1>{{title}}</h1>
</div>
<div> <ul  >
        <li v-for="item in listDishes" :key="item.name"  > 
          {{item.name}}  <input type="checkbox" v-model="chekedNames"   >
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
            }
            },
            data() {
                return {
                    chekedNames: ''
                }
                },
                computed: {
                    chekIn() {
                          if(this.chekedNames===true)
                        return this.order = this.chekedNames
                    
                },
                // methods: {
                //     chekIn() {
                //         if(this.chekedNames===true)
                //         this.order = this.chekedNames
                    
                // },
            
    
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