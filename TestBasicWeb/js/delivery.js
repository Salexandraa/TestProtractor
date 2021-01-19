//Задача.Форма офромлення доставки.З клавіатури вводиться вартість товару,
//спосіб доставки(поштою - 5 % вартості, новою поштою - 7 % вартості, кур”єром — 10 % вартсті),
//та термін доставки(термінова + 5 %, звичайна).
//Визначити загальну вартість доставки.
class Delivery {
    constructor(urkPoshta = 5, novaPoshta = 7, curier = 10) {
        this.urkPoshta = urkPoshta,
            this.novaPoshta = novaPoshta,
            this.curier = curier
    }
    getSumOfDeliveryChange(name) {
        let costofGods = parseFloat(this.inputNumber.value)
        let inputDelivery = document.getElementsByName(name)
        for (let i = 0; i < inputDelivery.length; i++) {
            if (inputDelivery[i].checked) {
                costofGods = parseFloat(costofGods * parseFloat(inputDelivery[i].value) / 100).toFixed(2)

            }
        }
        return costofGods
    }
    getTotalSumOfUrgentlyChange(name) {
        let costofGods2 = parseFloat(this.inputNumber.value)
        let inputUrgently = document.getElementsByName(name)
        for (let i = 0; i < inputUrgently.length; i++) {
            if (inputUrgently[i].checked) {
                costofGods2 = parseFloat(costofGods2 * parseFloat(inputUrgently[i].value) / 100).toFixed(2)
            }
        }
        return costofGods2
    }

    click() {
        let summaDel = 0
        let costOfProducts = this.inputNumber.value
        summaDel += parseFloat(costOfProducts)
        let deliveryChange = this.getSumOfDeliveryChange('deliv')
        summaDel += parseFloat(deliveryChange)
        let urgentlyChange = this.getTotalSumOfUrgentlyChange('urgently')
        summaDel += parseFloat(urgentlyChange)
        this.spanResult.innerText = `Вартість доставки вашого товару буде коштувати: ` + summaDel
    }
    render(containerId) {
        const container = document.getElementById(containerId)
        container.style.border = "solid 1px"
        let h1 = document.createElement('h1')
        container.appendChild(h1)
        let div = document.createElement('div')
        let label = document.createElement('label')
        label.style.border = 'solid 1px'
        label.innerText = 'Введіть вартість товару'
        this.inputNumber = document.createElement('input')
        this.inputNumber.setAttribute('type', 'number')
        label.appendChild(this.inputNumber)
        div.appendChild(label)
        container.appendChild(div)

        let br = document.createElement('br')
        container.appendChild(br)

        div = document.createElement('div')
        label = document.createElement('label')
        label.style.border = 'solid 1px'
        label.innerText = 'Оберіть спосіб доставки'
        div.appendChild(label)
        label = document.createElement('label')
        label.innerText = 'Укрпошта'
        this.urkPoshta = document.createElement('input')
        this.urkPoshta.setAttribute('type', 'radio')
        this.urkPoshta.setAttribute('name', 'deliv')
        this.urkPoshta.setAttribute('value', '5')
        label.appendChild(this.urkPoshta)
        div.appendChild(label)

        label = document.createElement('label')
        label.innerText = 'Нова пошта'
        this.novaPoshta = document.createElement('input')
        this.novaPoshta.setAttribute('type', 'radio')
        this.novaPoshta.setAttribute('name', 'deliv')
        this.novaPoshta.setAttribute('value', '7')
        label.appendChild(this.novaPoshta)
        div.appendChild(label)

        label = document.createElement('label')
        label.innerText = 'Курєр'
        this.curier = document.createElement('input')
        this.curier.setAttribute('type', 'radio')
        this.curier.setAttribute('name', 'deliv')
        this.curier.setAttribute('value', '10')
        label.appendChild(this.curier)
        div.appendChild(label)
        container.appendChild(div)

        br = document.createElement('br')
        container.appendChild(br)


        div = document.createElement('div')
        label = document.createElement('label')
        label.style.border = 'solid 1px'
        label.innerText = 'Терміново?'
        div.appendChild(label)

        label = document.createElement('label')
        label.innerText = 'Так'
        this.inputYes = document.createElement('input')
        this.inputYes.setAttribute('type', 'radio')
        this.inputYes.setAttribute('name', 'urgently')
        this.inputYes.setAttribute('value', '5')
        label.appendChild(this.inputYes)
        div.appendChild(label)

        label = document.createElement('label')
        label.innerText = 'Ні'
        this.inputNo = document.createElement('input')
        this.inputNo.setAttribute('type', 'radio')
        this.inputNo.setAttribute('name', 'urgently')
        this.inputNo.setAttribute('value', '0')
        label.appendChild(this.inputNo)
        div.appendChild(label)
        container.appendChild(div)

        br = document.createElement('br')
        container.appendChild(br)

        div = document.createElement('div')
        this.btn = document.createElement('button')
        this.btn.innerText = 'Розрахувати вартість'
        this.btn.onclick = this.click.bind(this)
        div.appendChild(this.btn)
        this.spanResult = document.createElement('span')
        div.appendChild(this.spanResult)
        container.appendChild(div)

    }
}
window.onload = function () {
    let delivery = new Delivery(5, 7, 10)
    delivery.render('delivery')
}


