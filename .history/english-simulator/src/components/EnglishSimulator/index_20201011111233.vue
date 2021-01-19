<template>
    <div class="container" >
<div>
    <img src="data:image/jpeg;base64,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" alt="">
</div>
<div v-show="answer===true">
    Ball </div>
    <div>
        <span >
            Ваша відповідь:
            <br>
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
                if(this.answer==='ball')
                
            }
        },
    }
</script>

<style lang="css" scoped>
.container{
    width: max-content;
    height: max-content;
    border: black solid;
}

</style>