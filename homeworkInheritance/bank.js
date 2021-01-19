
//     Приклад. Створити клас Client
// Властивості	
//ID
// ПІБ
// Кількість грошей на рахунку

// Методи	
//Додавання грошей
// Зняття грошей
// ToString

// На основі цього класу створити клас GoldenClient
// Властивості
//	ID
// ПІБ
// Кількість грошей на рахунку
// Ліміт кредитних коштів
// Відсоток за використання кредитних коштів
// Методи	
//Додавання грошей
// Зняття грошей
// Визначення пені за використання кредитних коштів
// ToString

class Client {
    constructor(id, name, money) {
        this.id = id
        this.name = name
        Object.defineProperty(this, "Money", {
            get: function () {
                return money
            },
            set: function (value) {
                if (value >= 0) {
                    money = value
                }
                else
                    throw new Error("error")
            }
        })
        this.money = money
    }

    putMoney(amount) {
        if (amount > 0)
            this.money += amount
    }
    getMoney(amount) {
        if (amount <= this.money)
            this.money -= amount

    }
    toString() {
        return `${this.id}-${this.name}-${this.money}`
    }
    addOnclick() {
        let addsum = parseFloat(this.input.value)
        this.putMoney(addsum)
        this.render('container')
    }
    getOnclick() {
        let getsum = parseFloat(this.input.value)
        this.getMoney(getsum)
        this.render('container')
    }

    render(container) {
        this.containerid = document.getElementById('container')
        this.containerid.innerHTML = ''
        const h1 = document.createElement('h1')
        h1.innerText = `Клієнт банку-${this.id}`
        this.containerid.appendChild(h1)
        this.table = document.createElement('table')
        this.table.setAttribute('border', "1px")
        let tr = document.createElement('tr')
        let th = document.createElement('th')
        th.innerText = 'ID'
        tr.appendChild(th)
        let td = document.createElement('td')
        td.innerText = this.id
        tr.appendChild(td)
        this.table.appendChild(tr)

        tr = document.createElement('tr')
        th = document.createElement('th')
        th.innerText = 'Name'
        tr.appendChild(th)
        td = document.createElement('td')
        td.innerText = this.name
        tr.appendChild(td)
        this.table.appendChild(tr)

        tr = document.createElement('tr')
        th = document.createElement('th')
        th.innerText = 'Money'
        tr.appendChild(th)
        td = document.createElement('td')
        td.innerText = this.money
        tr.appendChild(td)
        this.table.appendChild(tr)
        this.containerid.appendChild(this.table)


        this.input = document.createElement('input')
        this.input.setAttribute('type', 'number')
        this.input.setAttribute('placeholder', this.money)
        this.containerid.appendChild(this.input)

        let btn = document.createElement('button')
        btn.innerText = 'get'
        btn.setAttribute('id', 'getMoney')
        btn.onclick = this.getOnclick.bind(this)
        this.containerid.appendChild(btn)

        btn = document.createElement('button')
        btn.innerText = 'add'
        btn.setAttribute('id', 'addMoney')
        btn.onclick = this.addOnclick.bind(this)
        this.containerid.appendChild(btn)
    }
}
class GoldenClient extends Client {
    constructor(id, name, money, creditLimit, interestCredit) {
        super(id, name, money)
        Object.defineProperty(this, "creditLimit", {
            get: function () {
                return creditLimit
            },
            set: function (value) {
                if (value > 0) {
                    creditLimit = value
                }
                else throw new Error("error")
            }
        })
        this.creditLimit = creditLimit
        this.interestCredit = interestCredit
    }

    loanRate() {
        return this.useLimit / 100 * this.interestCredit

    }
    toString() {
        return "Ваше імя та кошти:" + super.toString() + "-" + "Ваш кредитний ліміт:" + this.creditLimit + "-" + "Процент за використання кредитиних коштів:" + this.interestCredit + "%"
    }
    getMoney(sum) {

        if (sum <= this.money && sum > 0) {
            this.money -= sum
        } else if (sum > this.money && sum <= (this.money + this.creditLimit)) {
            this.useLimit = this.creditLimit - ((this.money + this.creditLimit) - sum)
            this.creditLimit -= this.useLimit
            this.money = 0

            this.limit = true
        }
    }


    render(container) {
        super.render(container)

        let tr = document.createElement('tr')
        let th = document.createElement('th')
        th.innerText = 'Credit limit'
        tr.appendChild(th)
        let td = document.createElement('td')
        td.innerText = this.creditLimit
        tr.appendChild(td)
        this.table.appendChild(tr)

        tr = document.createElement('tr')
        th = document.createElement('th')
        th.innerText = 'Interest for the credit'
        tr.appendChild(th)
        td = document.createElement('td')
        td.innerText = this.interestCredit
        tr.appendChild(td)
        this.table.appendChild(tr)
        if (this.limit) {
            let tr = document.createElement('tr')
            let th = document.createElement('th')
            th.innerText = 'Витрачено кредитних коштів'
            tr.appendChild(th)
            td = document.createElement('td')
            td.innerText = this.useLimit
            tr.appendChild(td)
            this.table.appendChild(tr)

            tr = document.createElement('td')
            th = document.createElement('th')
            th.innerText = 'Комісія'
            tr.appendChild(th)
            td = document.createElement('td')
            td.innerText = this.loanRate().toFixed(2)
            tr.appendChild(td)
            this.table.appendChild(tr)
        }

        this.container.appendChild(this.table)


    }
}
window.onload = function () {
    var gold = new GoldenClient(idClient, nameClient, moneyClient, creditLimitClient, interestCreditClient)
    gold.render('container')

}
let idClient = 234559
let nameClient = 'Ivanov Ivan '
let moneyClient = 4983
let creditLimitClient = 3000
let interestCreditClient = 5

