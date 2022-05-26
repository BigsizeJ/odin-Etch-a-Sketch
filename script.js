const CONTAINER = document.querySelector(".container")
const BOARDSIZE = document.querySelector(".boardsize")
const CLEAR = document.querySelector(".clear")
const COLOR = document.querySelector(".color")
const RANDOM = document.querySelector(".random")


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
    currentColor = COLOR.value
}


function rainbowMode(){

}

createBoard()



BOARDSIZE.addEventListener("change", changeBoard)
CLEAR.addEventListener("click", clearBoard)
RANDOM.addEventListener("click", rainbowMode)
COLOR.addEventListener("change", changeColor)