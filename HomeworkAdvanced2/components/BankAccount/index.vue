<template>
  <div>
    <span >Сума на рахунку: </span>
    <span class="green" v-if="style===true">{{ result }}   </span>
    <span class="red" v-if="style===false">{{ result }} </span>

    <div>
      <span
        >Зарахувати на рахунок:
        <input type="number" min="1" v-model="addMoney" />
      </span>
      <button @click="enroll">Зарахувати</button>
    </div>
    <div>
      <span
        >Зняти з рахунку:
        <input type="number" min="1" v-model="removeMoney" />
      </span>
      <button @click="withdraw">Зняти</button>
    </div>

    <div>
      <span> Відсотки за обслуговування: {{ taxRes }} грн.</span>
    </div>

    <hr />

    <div>
      <span> Сума у доларах:  </span>
      <span class="green" v-if="this.dollars>100" > $ {{ dollars }} </span>
      <span class="red" v-if="this.dollars<100"> $ {{ dollars }} </span>
    </div>

    <div>
      <span> Сума у євро: </span>
      <span class="green" v-if="this.euro>100" > € {{euro}} </span>
      <span class="red" v-if="this.euro<100"> € {{euro}} </span>
    </div>
    <hr />
  </div>
</template>

<script>
// Задача. “Рахунок у банку”
// Вимоги:
//-1) Спочатку сума дорівнює 0грн. Змінити суму у гривнях можна або зарахуванням на рахунок, або зняттям.
//-2) Сума автоматично переводиться у долари та євро.
//-3) можливість зарахувати суму (контролювати, щоб не була від”ємною)
//-4) можлиість зняти (щоб не можна зняти більше ніж є на рахунку)
// 5) при виконанні зняття і зарахування коштів вираховувати 3% від суми (відображати кількість відсотків автоматично)
//-Блокувати кнопки у разі потреби.

// При зміні суми :
// - якщо було зняття, то суму відоражати червоним
// - якщо було зарахування, то суму відображати зеленим
// Якщо сума валюти менша за 100 то відображати червоним кольором, інакше - зеленим
export default {
  name: "BankAccount",
  props: {
    dollar: {
      type: Number,
      default: 28,
    },
    eu: {
      type: Number,
      default: 33,
    },
    tax: {
      type: Number,
      default: 3
    }
  },

  data() {
    return {
      addMoney: "",
      removeMoney: "",
      result: null,
      style: true
    };
  },

  computed: {
    dollars() {
      if (this.result > 0) {
        return (parseFloat(this.result) / this.dollar).toFixed(2);
      } else return 0;
    },
    euro() {
      if (this.result > 0) {
        return (parseFloat(this.result) / parseFloat(this.eu)).toFixed(2);
      } else return 0;
    },
    taxRes() {
      if (this.addMoney && this.addMoney > 0) {
        return (parseFloat(this.addMoney) * parseFloat(this.tax)) / 100;
      } else {
        if (this.removeMoney && this.removeMoney > 0) {
          return (parseFloat(this.removeMoney) * parseFloat(this.tax)) / 100;
        }
      }
      return 0;
    }
    },

  methods: {
    enroll() {
      if (this.addMoney && this.addMoney > 0) {
        this.style = true
        this.result += parseFloat(this.addMoney);
      }
      if (this.addMoney && this.addMoney > 0) {
        this.result -= parseFloat(this.taxRes).toFixed(2)
      }
      this.addMoney = "";
    },
    withdraw() {
      if (this.removeMoney && this.removeMoney > 0 && this.removeMoney <= this.result) {
          this.style = false
          this.removeMoney -= parseFloat(this.taxRes);
          this.result -= parseFloat(this.removeMoney).toFixed(2)
          }
          this.removeMoney = "";
    },
  },
};
</script>

<style lang="css" scoped>
.green{
  color: green;
}
.red{
  color: red;
}
</style>
