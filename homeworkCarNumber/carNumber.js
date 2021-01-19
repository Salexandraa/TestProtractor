// Задача. Користувач вводить номер автомобіля. У наступному полі вводу автоматично
//  з”являється назва області,
//  де цей автомобіль зареєстровано та номер обласного ДАІ.
class CarNumber {
    constructor(numberCar) {
        this.numberCar = numberCar

    }

    allInformation() {
        let inpInform = this.input.value
        for (let i = 0; i < inpInform.length; i++) {
            let res = numberCarAll.filter((numCode,i) => {
                if (inpInform[0] + inpInform[1] == numCode.code)
                this.inputRes.innerText = numCode[i]
            
            })
  
        }
      
    }
    render(containerId) {
        const container = document.getElementById(containerId)
        container.style.border = 'solid 1px'
        container.style.background = 'skyblue'
        container.style.width = '200px'
        container.style.height = '200px'
        let div = document.createElement('div')
        let span = document.createElement('span')
        span.innerText = 'Введіть номер автомобіля'
        div.appendChild(span)
        this.input = document.createElement('input')
        div.appendChild(this.input)
        let br = document.createElement('br')
        div.appendChild(br)
        br = document.createElement('br')
        div.appendChild(br)
        this.inputRes = document.createElement('input')
        // this.inputRes.onchange = this.allInformation.bind(this)
        this.inputRes.setAttribute('readonly', 'readonly')
        div.appendChild(this.inputRes)
        let btn = document.createElement('button')
        btn.innerText = 'Показати дані'
        btn.onclick = this.allInformation.bind(this)
        div.appendChild(btn)


        container.appendChild(div)


    }
}
window.onload = function () {
    const number = new CarNumber()
    number.render('carContainer')

}

let numberCarAll = [
    {
        code: 'AO',
        region: 'Закарпатська область',
        registration: '88006, м. Ужгород, вул. Гагаріна, 7',
        numberDAi: 0312630010

    },
    {
        code: 'AТ',
        region: 'Івано-Франківська область',
        registration: '76492, м. Івано-Франківськ, вул. Юності, 23',
        numberDAi: 0343350777

    },
    {
        code: 'ВС',
        region: 'Львівська область',
        registration: '79040, м. Львів, вул. Данила Апостола, 11',
        numberDAi: 0312630010

    },
    {
        code: 'СЕ',
        region: 'Чернівецька область',
        registration: '58023, Чернівці, вул. Руська, 248М',
        numberDAi: 0372547777

    }

]