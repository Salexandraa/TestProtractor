<template>
    <div>
<div>
    <img src="https://image.freepik.com/free-photo/soccer-ball_1398-1351.jpg" alt="">
</div>
<div v-show="answer===true">
    ball </div>
    <div>
        <span>
            Ваша відповідь:
            <input type="text" v-model="answer">
        </span>
    </div>
    <button @click="translate()">Перевірити</button>
    </div>
</template>

<script>
// Задача 3. Елемент тренажера англійської. Виводимо зображення елемента і слово. 
// Корисувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» 
// (і додаємо зелену рамку до елемента)
//  якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).
    export default {
        name:"EnglishSimulator",
        data() {
            return {
                answer: null
            }
        },
        methods: {
            translate() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>