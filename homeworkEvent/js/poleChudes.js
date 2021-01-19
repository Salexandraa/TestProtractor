class DreamField {
    constructor(word,tip)
    {
        Object.defineProperty(this, "Word", { value: word });
        Object.defineProperty(this, "Tip", { value: tip });
        this.forGuessLetterCount = word.length;
        if (! DreamField.counter)
           DreamField.counter = 0;

    }
    onButtonClick(e)
    {
        var letter = this.input.value;
        if (this.Word.includes(letter))
        {
            let count=0
            for (var i = 0; i < this.Word.length; i++) {
                if (letter == this.Word[i]) {
                    this.tdArray[i].innerText = letter;
                    this.forGuessLetterCount--;
                    count++;
                }
            }
            alert(`Ви вгадали ${count} літер`);
            if (this.forGuessLetterCount==0) {
                alert("Перемога");
            }
        }
        else
        {
            alert("Немає такої літери в цьому слові");
        }
        this.input.value = "";
    }
    render(containerId)
    {
        var container = document.getElementById(containerId);
        var div = document.createElement("div");
        div.innerText = `Підказка: ${this.Tip}`;
        container.appendChild(div);
        this.tdArray = [];  //Тут будемо зберігати адреси комірок таблиці
        var table = document.createElement("table");
        table.id = DreamField.counter++;
        table.border = "2px solid black";
        container.appendChild(table);
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (var i = 0; i < this.Word.length; i++) {
            var td = document.createElement("td");
            td.innerText = "*";
            tr.appendChild(td);
            this.tdArray.push(td);
        }
        this.input = document.createElement("input");
        this.input.type = "text";
        container.appendChild(this.input);
        var button = document.createElement("input");
        button.type = "button";
        button.value = "Перевірити";
        button.onclick = this.onButtonClick.bind(this);
        container.appendChild(button);
    }
}

//----------------
function start() {
    var game = new DreamField("CAR", "TEA");
    game.render("forGame");
}
