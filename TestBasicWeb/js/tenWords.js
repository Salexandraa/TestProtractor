//Задача 2. Користувач вводить 10 слів. 
//Підрахувати кількість слів, у яких перша літера і остання літера однакові.
class TenWords {
    constructor(words = 10) {
        this.words = words
        this.allword = []
    }
    addName() {
        let inp = []
        for (let i = 0; i < this.words; i++) {
            inp = this.inp.value
            this.allword.push(inp)
        }
        let result = this.allword.reduce((prev, word) => {
            if (word[0] === word[word.length - 1])
                return prev += 1
            else
                return prev
        }, 0)
        this.span.innerText = result
        console.log(this.allword)
    }
    createTable() {
        this.inputmass = []
        const table = document.createElement('table')
        table.setAttribute('border', '1px')
        table.style.backgroundColor = 'skyblue'
        for (let i = 0; i < this.words; i++) {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            this.inp = document.createElement('input')
            this.inp.setAttribute('type', 'text')
            td.appendChild(this.inp)
            tr.appendChild(td)
            table.appendChild(tr)
        }
        return table


    }
    render(containerId) {
        const container = document.getElementById(containerId)
        container.innerHTML = ''
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        h1.innerText = 'Введіть 10 слів'
        div.appendChild(h1)
        let tbl = this.createTable()
        div.appendChild(tbl)
        let btn = document.createElement('button')
        btn.innerText = 'Порахувати'
        btn.onclick = this.addName.bind(this)
        div.appendChild(btn)

        let divText = document.createElement('div')
        divText.innerText = 'Кількість слів в яких перші і остання літера однакові:'
        div.appendChild(divText)
        this.span = document.createElement('span')
        div.appendChild(this.span)

        container.appendChild(div)

    }
}

window.onload = function () {
    let name = new TenWords
    name.render('container')
}