<template>
  <div class="container">
    <div>
      <div class=" head">
        {{ caption }}
        <div>Рекламна мережа</div>
      </div>
    </div>
    <div class="img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="title">
      {{ title }}
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "PresentationBaner",

  props: {
    caption: {
      type: String,
      default: "",
    },
    
    imgSrc: {
      type: String,
      default:
        "https://png.pngtree.com/element_our/png_detail/20181206/temperature-vector-icon-png_261811.jpg",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
.container{
    width: 300px;
    height: auto;
    background-color: lightgray;
    
}
.head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: grey;
    height: 50px;
    color: white;
}
.img{
    background-color:lightgray ;
}
.title{
    color: white;
    text-align: left;

}

</style>
