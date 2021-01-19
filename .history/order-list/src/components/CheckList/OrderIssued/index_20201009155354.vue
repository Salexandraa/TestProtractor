<template>
    <div>

    </div>
</template>

<script>
import Reserved from "../Reserved"
import dishesList from "../settings"
    export default {
        name:"OrderIssued",
        components: "Reserved",
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