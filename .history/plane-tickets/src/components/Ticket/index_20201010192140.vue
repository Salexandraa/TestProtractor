<template>
    <div>
        <div>
            <h1>Квиток</h1>
        </div>
<div>
    <select> Оберіть клас
        <option value="buisness">Бізнес</option>
        <option value="econom">Економ</option>
    </select>

</div>
    </div>
</template>

<script>
// Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо 
// 1) бізнес -  виводимо елементи для вибору газети та коньяку 
// (якщо вибрано коньяк, то запропонувати закуску (так/ні)),
// 2) економ – виводимо елементи для вибору типу пива і чипсів.

    export default {
        name:"Tickets",
        
    }
</script>

<style lang="css" scoped>

</style>