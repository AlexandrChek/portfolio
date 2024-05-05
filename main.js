//ANIMATION

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
        if (i >= letters.length) {
            clearInterval(timer)
            setTimeout(hideLetters, 500)
        }
    }, 800)
}

hideLetters()

//TABLE HEADER

const ths = [
    'Description',
    'Links',
    'Technologies'
]
const tr1 = document.querySelector('tr')
ths.forEach(e => {
    const th = document.createElement('th')
    th.textContent = e
    tr1.append(th)
})

//SKILLS

const skills = document.querySelector('.skills')
skills.textContent = 'I have system thinking, strong analytical skills, good ability to read other programmer`s code and never give up in the face of challenging tasks. I can quickly adapt to new software and learn new technologies.'

//MESSENGERS

const messengers = [
    {picture: 'viber.svg', alt: 'Viber'},
    {picture: 'telegram.svg', alt: 'Telegram'},
    {picture: 'whatsapp.svg', alt: 'WhatsApp'},
    {picture: 'zoom.svg', alt:'Zoom'},
    {picture: 'meet.svg', alt: 'Meet'}
]
const messengersWrapper = document.querySelector('.messengers')
messengersWrapper.innerHTML = messengers.map(e => `<img src='./pictures/${e.picture}'alt='${e.alt}'>`).join(' ')
messengersWrapper.innerHTML += '<div>(not GSM<img src="./pictures/dont_call.jpg" id="dont-call" alt="Not GSM">)</div>'