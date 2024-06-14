const matrix = document.querySelector('.matrix')
const maxHeight = window.innerHeight * 3

for (let i = 0; i <= window.innerWidth / 16; i++) {
    let div = document.createElement('div')
    div.className = 'matrix-column'
    matrix.append(div)

   for (let n = 0; n < maxHeight / (15 * 1.2); n++) {
    div.textContent += ` ${Math.round(Math.random())}`
   }
}

let time = 0, opacity = 1
const interval = 250, fullTime = 3700

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
