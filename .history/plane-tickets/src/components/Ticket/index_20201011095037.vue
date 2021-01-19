<template>
    <div class="container">
        <div>
            <h1>{{title}}</h1>
        </div>
<div>
    <select v-model="chooseClass"> Оберіть клас
        <option value="business">Бізнес</option>
        <option value="econom">Економ</option>
    </select>
</div>

<div v-show="chooseClass === 'business'">
    <span>Газета 
<input type="checkbox" value="newspaper" v-model="checkedNewspaper">
    </span>
    <span >Коньяк 
<input type="checkbox" value="cognac" v-model="checkedCognac">
    </span>
    <div v-show="chooseCognac">
        <input type="checkbox" value="yes">
<input type="checkbox" value="no">
    </div>
</div>

<div v-show="chooseClass === 'econom'">
    <span>Пиво 
<input type="checkbox" value="beer" v-model="checkedBeer">
    </span>
    <span >Чіпси 
<input type="checkbox" value="chips" v-model="chekedChips">
    </span>
</div>
<button>Ок</button>
    </div>
</template>

<script>
// Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо 
// 1) бізнес -  виводимо елементи для вибору газети та коньяку 
// (якщо вибрано коньяк, то запропонувати закуску (так/ні)),
// 2) економ – виводимо елементи для вибору типу пива і чипсів.

    export default {
        name:"Tickets",
        props: {
            title: {
                type: String,
                default: ''
            },
            data() {
                return {
                    chooseCognac: null,
                    chooseClass:null,
                    checkedCognac:null,
                    checkedNewspaper:null
                }
            },
            methods: {
                name() {
                    
                }
            },
        },
        
    }
</script>

<style lang="css" scoped>
.container{
    border: black solid;
    width: 400px;
    height: 400px;
}

</style>