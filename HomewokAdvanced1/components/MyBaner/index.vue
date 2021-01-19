<template>
  <div>
    <img :src="imgSrc" alt="" class="my-baner"/>
    <div>
      {{ `${title}-${clicksNumber}` }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBaner",

  props: {
    imgSrc: {
      type: String,
      default: "https://zadari.com.ua/content/images/18/95899895444665.jpg",
    },
    title: {
      type: String,
      default: "Elite Gigts",
    },
    clicksNumber: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="css" scoped>
.my-baner{
  width: 200px;
}
</style>