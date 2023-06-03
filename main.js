const port = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']
const portWrapper = document.querySelector('.port-wrapper')
portWrapper.innerHTML = port.map(e => `<p class="letters">${e}</p>`)
const letters = document.querySelectorAll('.letters')

function hideLetters() {
    letters.forEach(e => {
        e.style.display = 'none'
    })
    showLetters()
}

function showLetters() {
    let i = 0
    let timer = setInterval(() => {
        letters[i].style.display = 'block'
        i++
        if(i >= letters.length) {
            clearInterval(timer)
            setTimeout(hideLetters, 500)
        }
    }, 800)
}

hideLetters()

const messengers = [
    {picture: 'viber.png', alt: 'Viber'},
    {picture: 'telegram.png', alt: 'Telegram'},
    {picture: 'whats_up.png', alt: 'What`s up'},
    {picture: 'meet.png', alt: 'Meet'},
    {picture: 'zoom.png', alt:'Zoom'}
]
const messengersWrapper = document.querySelector('.messengers')
messengersWrapper.innerHTML = messengers.map(e => `<img src='./pictures/${e.picture}'alt='${e.alt}'>`).join(' ')
messengersWrapper.innerHTML += '<div>(not GSM<img src="./pictures/dont_call.jpg" alt="Not GSM">)</div>'