const CONTAINER = document.querySelector(".container")
const BOARDSIZE = document.querySelector(".boardsize")
const CLEAR = document.querySelector(".clear")
const COLOR = document.querySelector(".color")
const RANDOM = document.querySelector(".random")
const ERASER = document.querySelector(".eraser")
const COLOR_MODE = document.querySelector(".colorMode")
const BTN = document.querySelectorAll(".btn")
const RANGE = document.querySelector(".displayRange")

BOARDSIZE.addEventListener("change", changeBoard)
BOARDSIZE.addEventListener("mousemove", displayRange)

CLEAR.addEventListener("click", clearBoard)
RANDOM.addEventListener("click", changeColor)
COLOR.addEventListener("change", changeColor)   
ERASER.addEventListener("click", changeColor)
COLOR_MODE.addEventListener("click", changeColor)


let currentColor = "#000"
let mouseDown = false
let test = null

document.body.addEventListener("mousedown", () => mouseDown = true)
document.body.addEventListener("mouseup", () => mouseDown = false)


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
    RANGE.innerText = `${this.value}x${this.value}`
}

function displayRange(){
    RANGE.innerText = `${this.value}x${this.value}`
}

function draw(){
    if(!mouseDown) return
    this.style.backgroundColor = currentColor
}

function clearBoard(){
    let squares = CONTAINER.querySelectorAll("div")
    squares.forEach(div => div.style.backgroundColor = "#fefefe")
}

function changeColor(){
    clearInterval(test)
    BTN.forEach(btn => btn.classList.remove("active"))
    console.log(this)
    switch(this.name){
        case "color":
            this.classList.add("active")
            currentColor = COLOR.value
            break
        case "eraser":
            this.classList.add("active")
            currentColor = "#fefefe"
            break
        case "random":
            test = setInterval(() => {
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)
                this.classList.add("active") 
                currentColor = `rgb(${r}, ${g}, ${b})`
            })
            break
        case "change":
            currentColor = this.value
            COLOR_MODE.classList.add("active")
    }
}



createBoard()




