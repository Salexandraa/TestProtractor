<template>
    <div>
<div>
    {{title}}
</div>
<div>
    <ol>
        <li v-for="item in dishesList" :key="item.name" >
             {{item.name}} <input type="checkbox" v-model="item.names">
        </li>
    </ol>
</div>
    </div>
</template>

<script>

    export default {
        name:"OrderIssued",
    
        props: {
            title: {
                type: String,
                default: ''
            },
         
            
        },
        
    }
</script>

<style lang="scss" scoped>

</style>