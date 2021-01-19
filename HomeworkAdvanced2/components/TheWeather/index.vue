<template>
  <div class="container">
    {{ town }}
    {{ date }}
    <div class="temperature">{{ temperature }}</div>
    <div class="indicator">
      <div>{{ humidity }}</div>
      <div>{{ pleasure }}</div>
      <div>{{ wind }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weather",
  props: {
    town: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    temperature: {
      type: String,
      default: "-",
    },
    humidity: {
      type: String,
      default: "",
    },
    pleasure: {
      type: String,
      default: "",
    },
    wind: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  width: 300px;
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
}
.indicator {
  display: flex;
  flex-flow: column wrap;
  align-content: flex-end;
}
.temperature {
  width: 50px;
}
</style>
