//Розробити клас «Морський бій». 
// Користувач має 10 снарядів. На полі 4*4 розміщується випадковим чином 3 кораблі.
//  Вивести за результатами гри відповідне повідомлення.

class seaBattle {
    constructor(rows, cols, ammunition = 10,) {
        this.rows = rows
        this.cols = cols
        this.ammunition = ammunition
        var _table = this.createTable()
        Object.defineProperty(this, 'gameField', { value: _table })
    }


    createTable() {
        var table = []
        for (let i = 0; i < this.rows; i++) {
            this.row = []

            for (let k = 0; k < 3; k++) {
                let rand = Math.floor(Math.random() * 2)
                this.row.push(rand)
            }

            table.push(this.row)
        }
        return table
    }
    clickCounter(e) {
        this.ammunition -= 1
        let count = 0
        for (let i = 0; i < this.row.length; i++) {
            if (e.target.getAttribute('isShip') == '1')
                count++
        }
        if (this.ammunition === 0) {
            document.write(` Ви потопили ${count} кораблів. `)
            alert('Гра закінчена')
        }


    }
    onClick(e) {
        if (e.target.getAttribute('isShip') == '1') {
            e.target.style.backgroundColor = 'blue'
            alert('Ви влучили в корабель')
        }
    }
    render(containerId) {
        var div = document.getElementById(containerId)
        var table = document.createElement('table')

        table.style.border = 'solid 2px'
        table.style.backgroundColor = 'skyblue'

        for (let i = 0; i < this.rows; i++) {
            var tr = document.createElement('tr')
            for (let j = 0; j < this.cols; j++) {

                var td = document.createElement('td')
                td.style.border = '2px'
                var btn = document.createElement('button')
                btn.style.width = '50px'
                btn.style.height = '50px'
                btn.innerText = '-'
                btn.setAttribute('isShip', this.gameField[i][j])
                btn.onclick = this.clickCounter.bind(this)
                td.appendChild(btn)
                tr.appendChild(td)
            }
            table.appendChild(tr)

        }
        table.addEventListener('click', this.onClick)
        div.appendChild(table)
    }
}
window.onload = function () {
    let ship = new seaBattle(4, 4, 10)
    ship.render('seaBattleContainer')
}