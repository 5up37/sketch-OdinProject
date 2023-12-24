let container = document.querySelector('.container')
container.style.cssText = 'display: flex; flex-wrap: wrap; height: 640px; width:640px'



for (let i = 1; i <= 16*16; i++) {
    let div = document.createElement('div')
    div.style.cssText = "width: 40px; height: 40px; flex: 0 0 auto"
    container.appendChild(div)
}

let divs = document.querySelectorAll('.container div')
divs.forEach((div) => {
    div.addEventListener('mouseenter',(e) => {
        div.style.backgroundColor = 'green'
    })
})