<template>
    <div class="baner" >
        <div class="title">
 <div class="baner-peach">
  {{caption}} 
    </div>
  <div class="baner-peach">
 {{advertising}} 
</div>
        </div>
        <div class="img">
<img :src="imgSrc" alt="" class="baner-peach">
        </div>
<div class="baner-peach">
    {{title}}
</div>

    </div>
</template>

<script>
    export default {
        name:"BanerPeach",

        props: {
            caption: {
                type: String,
                default: "no caption"
            },
            advertising:{
                type:String,
                default:"Advertising network"
            },
            imgSrc:{
                type:String,
                default:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxkswCC-Rgt-1_eCp4Tycq-qpMIY0b-p_e4Q&usqp=CAU"
            },
            title:{
                type:String,
                default:"Juicy peach"
            }
        },
    }
</script>

<style lang="css" scoped>
.baner-peach{
    border-color: red;
    border-style: solid;
    border-width: 5px;
    width: min-content;
}
.baner{
    width:500px;
}

.title{
    background-color: grey;
    width: 400px;
    text-align: center;
}
.img{
    background-color: lavenderblush;
    width: 400px;
    
}
</style>