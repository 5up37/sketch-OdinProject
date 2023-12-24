let container = document.querySelector('.container')
container.style.cssText = 'display: flex; flex-wrap: wrap; height: 960px; width:960px'


function createGrid(size) {
for (let i = 1; i <= size*size; i++) {
    let div = document.createElement('div')
    div.style.cssText = `width: ${960 / size}px; height: ${960 / size}px; flex: 0 0 auto`
    container.appendChild(div)
}}

createGrid(10)

let divs = document.querySelectorAll('.container div')
divs.forEach((div) => {
    div.addEventListener('mouseenter',(e) => {
        div.style.backgroundColor = 'green'
    })
})

let button = document.querySelector
button.addEventListener('Click',(e) => {
    container.removeChild(divs)
    })