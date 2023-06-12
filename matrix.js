const matrix = document.querySelector('.matrix')

let i = 0
while(i <= window.innerWidth / 15) {
    let div = document.createElement('div')
    div.className = 'm-column'
    matrix.append(div)
    div.textContent = Math.round(Math.random())
    let n = 0
    while(n < 90) {
        div.textContent += ` ${Math.round(Math.random())}`
        n++
    }
    i++
}

let scroll = 50
let timer = setInterval(() => {
    matrix.scrollTop = scroll
    scroll += 50
    if(scroll >= 700) {
        clearInterval(timer)
        matrix.style.display = 'none'
    }
}, 250)
