///2
// Задача 1. Створити клас Dice, який представляє гральний кубик 
// (одне поле faceCount - кліькістьграней)
//  і дозволяє генерувати випадкове число від 1 до кількості граней. 
//  Потім на основі цього класу створити клас ,
//   який дозволяє вказати не тільки кількість граней,
//    а й кількість спроб - attemptCount .



class Dice {
    constructor(faceCount) {
        this.faceCount = faceCount
    }
    render(containerId) {
        this.container = document.getElementById(containerId)
        this.container.innerHTML = ''
        const h1 = document.createElement('h1')
        h1.innerText = 'Гральний кубик.Якщо співпадуть всі згенеровані числа ви виграли'
        this.container.appendChild(h1)
        this.table = document.createElement('table')
        this.table.setAttribute('border', '2px')
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerText = 'Кількість граней'
        tr.appendChild(td)
        let th = document.createElement('th')
        this.inpFaceCount = document.createElement('input')
        this.inpFaceCount.setAttribute('type', 'number')
        th.appendChild(this.inpFaceCount)
        tr.appendChild(th)
        this.table.appendChild(tr)
        this.container.appendChild(this.table)
    }
}
class GameDice extends Dice {
    constructor(faceCount, attemptCount) {
        super(faceCount)
        this.attemptCount = attemptCount
    }
    onclick() {
        this.faceCount = this.inpFaceCount.value
        this.attemptCount = this.inpAttempt.value
        this.randArr = []
        for (let i = 0; i < this.attemptCount; i++) {
            this.random = Math.floor(1 + Math.random() * (this.faceCount - 1 + 1))
            this.randArr.push(this.random)
        }
        for (let i = 1; i < this.randArr.length; i++) {
            if (this.randArr[0] === this.randArr[i]) {
                this.img = document.createElement('img')
                this.img.setAttribute('srs', './img/car.png')
                this.container.appendChild(this.img)
                alert(this.img)
            }
        }
        this.render('container2')
    }

    render(containerId) {
        super.render(containerId)
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerText = 'Кількість спроб'
        tr.appendChild(td)
        let th = document.createElement('th')
        this.inpAttempt = document.createElement('input')
        this.inpAttempt.setAttribute('type', 'number')
        th.appendChild(this.inpAttempt)
        tr.appendChild(th)
        this.table.appendChild(tr)
        for (let i = 0; i < this.attemptCount; i++) {
            let tr = document.createElement('tr')
            let th = document.createElement('th')
            th.innerText = 'Згенероване число:'
            tr.appendChild(th)
            this.td = document.createElement('td')
            this.td.innerText = `${this.randArr[i]}`
            tr.appendChild(this.td)
            this.table.appendChild(tr)
        }
        this.container.appendChild(this.table)

        this.btn = document.createElement('button')
        this.btn.innerText = 'Генерувати'
        this.btn.onclick = this.onclick.bind(this)
        this.container.appendChild(this.btn)
    }
}
window.onload = function () {
    const dice = new GameDice()
    dice.render('container2')
}