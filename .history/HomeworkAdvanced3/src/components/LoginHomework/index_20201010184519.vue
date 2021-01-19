<template>
  <div>
    <div>
      <label>
        Login
        <input type="text" v-model="login" placeholder="Input login here" />
      </label>
    </div>
    <div>
      <label>
        Password
        <input
          type="text"
          v-model="password"
          placeholder="Input password here"
        />
      </label>
    </div>
    <button :disabled="!isDataValid" @click="onLogin">Go</button>
    <div
      class="message"
      :class="{
        'message-ok': authResult,
        'message-error': authResult === false,
        'input-ivan': inputIvan && authResult === false,
      }"
    >
      {{ messageResult }}
    </div>
    <div v-if="authResult">
      <img :src="image" alt="=)" />
    </div>
  </div>
</template>

<script>
// Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний
export default {
  name: "LoginHomework",

  props: {
    loginsList: {
      type: Array,
      default: () => [],
    },
    image: {
      type: URL,
      default: '@/assets/smile.jpg',
    },
  },
  data() {
    return {
      login: null,
      password: null,
      authResult: null,
      inputIvan: null,
    };
  },
  computed: {
    isDataValid() {
      return this.login && this.password;
    },
    messageResult() {
      if (this.authResult) return "Welcome!";
      if (this.authResult === false) return "Login or password is incorrect!";
      return "Input login and password";
    },
  },

  methods: {
    onLogin() {
      if (this.login && this.password) {
        this.authResult = null;
        const user = this.loginsList.find(
          (item) => item.log === this.login && item.pass === this.password
        );
        if (user) {
          this.authResult = true;
        } else {
          this.authResult = false;
        }
        this.inputIvan = null;
        if (this.login === "Ivan") this.inputIvan = true;
      }
    },
  },
};
</script>

<style lang="css" scoped>
.message {
  color: yellow;
}
.message-ok {
  color: green;
}
.message-error {
  color: red;
}
.input-ivan {
  color: blue;
}
</style>
