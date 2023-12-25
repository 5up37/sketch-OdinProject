let container = document.querySelector('.container')
container.style.cssText = 'display: flex; flex-wrap: wrap; height: 960px; width:960px'
let body = document.querySelector('body')
let mode = document.querySelector('h1')
let red = 0
let green = 0
let blue = 0
let finishButton

function createButton(color) {
    let createdColorButton = document.createElement('button')
    createdColorButton.setAttribute('id',color.toLowerCase())
    createdColorButton.textContent = color
    createdColorButton.addEventListener('click',(e) => {
        ActivateColor(`${createdColorButton.id}`)
    })
    body.insertBefore(createdColorButton,mixtureButton)
}
function ActivateColor(color) {
    let divs = document.querySelectorAll('div div')
    divs.forEach((div) => {
        div.addEventListener('mouseenter',(e) => {
            div.style.backgroundColor = color
        })
    })
}
function createGrid(size) {
for (let i = 1; i <= size*size && size<=100; i++) {
    let div = document.createElement('div')
    div.style.cssText = `width: ${960 / size}px; height: ${960 / size}px; flex: 0 0 auto; background-color: black`
    container.appendChild(div)  
}
let divs = document.querySelectorAll('div div')
divs.forEach((div) => {
    div.addEventListener('mouseenter',(e) => {
        div.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)}`
    })
})}

createGrid(16)

let buttons = document.querySelectorAll('.color')
buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        ActivateColor(`${button.id}`)
    })
})

let mixtureButton = document.querySelector('#mixture')
mixtureButton.addEventListener('click',(e) => {
    mode.textContent = 'Mixture mode'
    buttons.forEach((button) => {
        button.addEventListener('click',(e) => {
            switch (button.id) {
                case 'red': red = 1
                break;
                case 'green': green = 1
                break;
                case 'blue': blue = 1
                break;
            }
        })
    })
    mixtureButton.style.display = 'none'
    finishButton = document.createElement('button')
    finishButton.textContent = 'Finish mixture'
    finishButton.addEventListener('click',(e) => {
        if (red === 1 && green === 1) {
            red = 0
            green = 0
            createButton('Yellow')
        }
        else if (red === 1 && blue === 1) {
            red = 0
            blue = 0
            createButton('Purple')
        }
        else if (green === 1 && blue == 1) {
            green = 0
            blue = 0
            createButton('Aqua')
        }
        else if (green === 1 && blue ===1 && green ===1) {
            green = 0
            blue = 0
            red = 0
            createButton('White')
        }
        else {
            createButton('Black')
        }
        body.removeChild(finishButton)
        mixtureButton.style.display = 'inline'
    })
    body.appendChild(finishButton)
})



