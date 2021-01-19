class Calculator {
    constructor(currentOperand, previsiousOperand) {
        this.currentOperand = currentOperand,
            this.previsiousOperand = previsiousOperand
        this.updateDisplay()

    }
    clear() {
        this.currentOperand = ''
        this.previsiousOperand = ''
        this.operation = undefined

    }
    delete() {
        let current = document.getElementById('spanCurr')
        let previsious = document.getElementById('spanPrev')

        this.currentOperand = current
        this.previsiousOperand = previsious

        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }
    addNumber(number) {
        let current = document.getElementsByName('spanCurr')
        let previsious = document.getElementsByName('spanPrev')

        this.currentOperand = current
        this.previsiousOperand = previsious
        //якщо крапка кнопка дор крапці тоді 
        if (number === '.' && this.currentOperand.includes('.'))
            return
        //повертаємо число в рядок і число

        this.currentOperand = this.currentOperandText + number
    }
    updateDisplay() {
        let current = document.getElementsByName('spanCurr')
        let previsious = document.getElementsByName('spanPrev')

        this.currentOperand = current
        this.previsiousOperand = previsious

    }
    operationChoose(operation) {
        if (this.currentOperand === '')
            return
        if (this.previsiousOperand !== '') {
            this.equal()
        }
        this.operation = operation
        //минуле введене число переходить в попереднє значення
        this.previsiousOperand = this.currentOperand
        //а нове стає пустим
        this.currentOperand = ''


    }
    equal() {
        let computatiton
        let prev = parseFloat(this.previsiousOperand)
        let curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr))
            return
        switch (this.operation) {
            case '+':
                computation = prev + curr
                break;
            case '-':
                computation = prev - curr
                break;
            case '*':
                computation = prev * curr
                break;
            case ' ÷':
                computation = prev / curr
                break;
            default:
                return
        }
        this.currentOperand = computatiton
        this.operation = undefined
        this.previsiousOperand = ''
    }
    // click(e) {

    //     let spPrev = document.getElementById('spanPrev')
    //     let spCurr = document.getElementById('spanCurr')
    //     if (e.target.tagName == 'table') {
    //         spPrev.innerHTML = ''
    //     }
    //     else {
    //         spPrev.innerText += e.target.innerText
    //     }
    // }

    render(containerId) {
        let container = document.getElementById(containerId)
        let divSpan = document.createElement('div')
        divSpan.style.border = 'solid 1px'
        divSpan.style.width = '148px'
        divSpan.style.height = '50px'

        this.spanPrevisious = document.createElement('span')
        this.spanPrevisious.setAttribute('name', 'spanPrev')
        this.spanPrevisious.innerText = ''
        divSpan.appendChild(this.spanPrevisious)

        this.spanCurrent = document.createElement('span')
        this.spanCurrent.setAttribute('name', 'spanCurr')
        this.spanCurrent.innerText = ''
        divSpan.appendChild(this.spanCurrent)

        container.appendChild(divSpan)

        this.table = document.createElement('table')
        this.table.style.width = '150px'
        this.table.style.height = '180px'
        this.table.setAttribute('border', '1px')
        this.table.style.textAlign = 'center'
        this.table.style.backgroundColor = 'skyblue'
        this.table.addEventListener('click', this.click)


        let tr = document.createElement('tr')
        this.tdC = document.createElement('td')
        this.tdC.innerText = 'C'
        this.tdC.setAttribute('name','clearTd')
        
        //this.tdC.addEventListener('click', this.clear)
        this.tdC.setAttribute('colspan', '2')
        tr.appendChild(this.tdC)

        this.tdDel = document.createElement('td')
        this.tdDel.innerText = '🠈'
        this.tdDel.setAttribute('name','deleteTd')
        // this.tdDel.addEventListener('click', this.delete)
        tr.appendChild(this.tdDel)

        this.operation = document.createElement('td')
        this.operation.innerText = '÷'
        this.operation.setAttribute('name','operations')
        tr.appendChild(this.operation)
        this.table.appendChild(tr)

        tr = document.createElement('tr')
        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '1'
        this.numberTd.setAttribute('name','tbl')

        tr.appendChild(this.numberTd)

        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '2'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '3'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.operation = document.createElement('td')
        this.operation.innerText = '*'
        this.operation.setAttribute('name','operations')
        tr.appendChild(this.operation)
        this.table.appendChild(tr)

        tr = document.createElement('tr')
        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '4'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '5'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '6'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.operation = document.createElement('td')
        this.operation.innerText = '+'
        this.operation.setAttribute('name','operations')
        tr.appendChild(this.operation)
        this.table.appendChild(tr)

        tr = document.createElement('tr')
        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '7'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '8'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '9'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.operation = document.createElement('td')
        this.operation.setAttribute('name','operations')
        this.operation.innerText = '-'
        tr.appendChild(this.operation)
        this.table.appendChild(tr)

        tr = document.createElement('tr')
        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '.'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.numberTd = document.createElement('td')
        this.numberTd.innerText = '0'
        this.numberTd.setAttribute('name','tbl')
        tr.appendChild(this.numberTd)

        this.equalTd = document.createElement('td')
        this.equalTd.innerText = '='
        this.equalTd.setAttribute('colspan', '2')
        this.equalTd.setAttribute('name','equalTd')
        tr.appendChild(this.equalTd)
        this.table.appendChild(tr)

        container.appendChild(this.table)
        this.updateDisplay()
    }


}
window.onload=function () {
    let calculator = new Calculator()
    calculator.render('calculator') 
    const numberTd = document.getElementsByName('tbl')
const operat = document.getElementsByName('operations')
const currentOperandText = document.getElementsByName('spanPrev')
const previsiousOperandText = document.getElementsByName('spanCurr')
const equalsTd = document.getElementsByName('equalTd')
const deleteTd = document.getElementsByName('deleteTd')
const clearBtn = document.getElementsByName('clearTd')
numberTd.forEach(tdNumber => {
    tdNumber.addEventListener('click', () => {
        calculator.addNumber(tdNumber.innerText)
        calculator.updateDisplay()
    })
})

operat.forEach(tdOperat=>{
    tdOperat.addEventListener('click',()=>{
        calculator.operationChoose(tdOperat.innerText)
        calculator.updateDisplay()
    })
})

equalsTd.forEach(tgEqual=>{
    calculator.equal()
    calculator.updateDisplay()
})

clearBtn.forEach(clearb=>{
    calculator.clear()
    calculator.updateDisplay()
})



deleteTd.forEach(btnDel=>{
    calculator.delete()
    calculator.updateDisplay()
})
}








  



