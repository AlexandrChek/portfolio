const matrix = document.querySelector('.matrix')
const maxHeight = window.innerHeight * 3

let i = 0
while (i <= window.innerWidth / 16) {
    let div = document.createElement('div')
    div.className = 'matrix-column'
    matrix.append(div)
    let n = 0
    while (n < maxHeight / (15 * 1.5)) {
        div.textContent += ` ${Math.round(Math.random())}`
        n++
    }
    i++
}

let time = 0
let opacity = 1
const interval = 250
const fullTime = 3700
const timer = setInterval(() => {
    matrix.scrollTop += 50
    time += interval

    if (time >= 0.55 * fullTime) {
        opacity -= 1 / ((fullTime * 0.45) / interval)
        matrix.style.opacity = opacity
    }

    if (time >= fullTime || matrix.scrollTop >= maxHeight) {
        matrix.style.display = 'none'
        clearInterval(timer)
    }
}, interval)
