const CONTAINER = document.querySelector(".container")
const BOARDSIZE = document.querySelector(".boardsize")
const RESET = document.querySelector(".reset")
const COLOR = document.querySelector(".color")

let currentColor = "#000"

function createBoard(arg1 = 16, arg2 = 16){
    CONTAINER.style.gridTemplateColumns = `repeat(${arg1}, 1fr)`
    CONTAINER.style.gridTemplateRows = `repeat(${arg2}, 1fr)`;

    let squares = CONTAINER.querySelectorAll("div")
    squares.forEach(div => div.remove())

    let size = arg1 * arg2;

    for(let i = 0; i < size; i++){
        let square = document.createElement("div")
        square.addEventListener("mouseover", draw)
        CONTAINER.appendChild(square)
    }
}

function changeBoard(){
    createBoard(this.value, this.value)
}

function draw(){
    this.style.backgroundColor = currentColor
}

function clearBoard(){
    let squares = CONTAINER.querySelectorAll("div")
    squares.forEach(div => div.style.backgroundColor = "#fefefe")
}

function changeColor(){
    currentColor = this.value
}


createBoard()
BOARDSIZE.addEventListener("change", changeBoard)


RESET.addEventListener("click", clearBoard)
COLOR.addEventListener("change", changeColor)