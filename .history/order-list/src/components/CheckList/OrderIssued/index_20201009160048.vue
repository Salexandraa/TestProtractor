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
import dishesList from "../settings"
    export default {
        name:"OrderIssued",
    
        props: {
            title: {
                type: String,
                default: ''
            },
            data() {
                return {
                    dishesList
                }
            },
        },
        
    }
</script>

<style lang="scss" scoped>

</style>