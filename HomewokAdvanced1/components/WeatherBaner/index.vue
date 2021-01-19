<template>
    <div class="baner">
<div class="town">
    {{town}}
</div>
<div class="date">
    {{date}}
</div>
<div>
<img :src="imgSrc" alt="" class="img">
</div>

<div class="temperature">
    {{temperature}}
</div>
<div class="weather1">
    {{humidity}}
</div>
<div class="weather2">
    {{pleasure}}
</div>
<div class="weather3">
    {{wind}}
</div>
    </div>
</template>

<script>
    export default {
        name:"weather",
        props: {
           town: {
                type:String,
                default: "Uzhgorod"
            },
            date:{
                type:String,
                default:"Today 09.00"
            },
            imgSrc:{
                type:String,
                default:"https://png.clipart.me/istock/previews/5014/50148626-thermometer-icon.jpg"
            },
            temperature:{
                type:String,
                default:"-"
            },
            humidity:{
                type:String,
                default:"Humidity:"
            },
            pleasure:{
                type:String,
                default:"Pleasure:"
            },
            wind:{
                type:String,
                default:"Wind:"
        },

        },
      
    }
</script>

<style lang="css" scoped>
.baner{
    width: 350px;
    height: 300px;
    position: relative;
    /* border-color: skyblue ;
      border-style: solid; */
}
.baner div{
      border-color: red;
    border-style: solid;
    border-width: 5px;
    width: max-content;

}
.town{
    width:60px;
    position: absolute;
    left: 20px;
    top:20px
}
.date{
     width: 60px;
    position: absolute;
    right: 20px;
    top: 20px;
}
.img{
    width: 100px;
    height: 100px;
    position: absolute;
    left :20px;
    top:100px;
    border-color: red;
    border-style: solid;
    border-width: 5px;
}
.temperature{
    width: 40px;
    height: 100px;
    position: absolute;
    left: 150px;
    top: 100px;
}
.weather1{
    position: absolute;
    right: 20px;
    top:100px
}
.weather2{
    position: absolute;
    right: 20px;
    top:125px
}
.weather3{
    position: absolute;
    right: 20px;
    top:150px
}
</style>