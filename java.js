let container = document.querySelector('.container')
container.style.cssText = 'display: flex; flex-wrap: wrap; height: 960px; width:960px'
let body = document.querySelector('body')


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
        div.style.opacity = i++
    })
})}

createGrid(16)

let button = document.querySelector('button')
button.addEventListener('click',(e) => {
    body.removeChild(container)
    container = document.createElement('div')
    container.style.cssText = 'display: flex; flex-wrap: wrap; height: 960px; width:960px'
    body.insertBefore(container,button)
    createGrid(prompt('Size of grid'))
    })