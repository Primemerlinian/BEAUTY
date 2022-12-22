/*-------------------------------- Constants --------------------------------*/

const demands = [
  'I need attention 🥺🐾',
  'I am hungry 😡',
  'Clean my teeth 🦷',
  'Play ball with me 🎾'
]





/*-------------------------------- Variables --------------------------------*/

let timer
let timeLeft= 60;
let progress= 0
let demandLoser = false
let demandTime = 60






/*------------------------ Cached Element References ------------------------*/

const beginButton = document.getElementById('begin-button')
const messageEl = document.getElementById('message')
const attention = document.getElementById('attention')
const food = document.querySelector('#food')
const care = document.querySelector('#care')
const ball = document.querySelector('#ball')
// const resetButton = document.querySelectorAll('#reset')
const countdownEl = document.getElementById('countdown')
const progBar = document.querySelectorAll('progressBar')
let demandNum = Math.floor(Math.random()* demands.length)
// console.log(demands[demandNum])
const calmSound = new Audio ("../assets/audio/calmgameplay.wav")
let winner = document.querySelector('#winner')
let loser = document.querySelector('#loser')





/*----------------------------- Event Listeners -----------------------------*/


beginButton.addEventListener('click', begin)

// resetButton.addEventListener('click', init)

attention.addEventListener('click', demandAttention)

food.addEventListener('click', demandFood)

care.addEventListener('click', demandCare)

ball.addEventListener('click', demandBall)



/*-------------------------------- Functions --------------------------------*/

init ()

function init() {
  stopPlaying = false
  timeLeft = demandTime
  resetButton.setAttribute('shown',true)
  calmSound.pause()
}

function randomDemands () {
  let randomNum =  [Math.floor(Math.random() * demands.length)]
  return messageEl.innerHTML = demands[randomNum]
}
function begin () {
  let text = randomDemands ()
  messageEl.innerHTML = text
  beginButton.setAttribute('hidden', true)

  calmSound.volume = 0.20
  calmSound.play()
  
}

function demandAttention() {
  if(messageEl.innerHTML === demands[0]) {
    progress += 10
    randomDemands()
    return
  }
  winnerCheck()
}
function demandFood() {
  if (messageEl.innerHTML === demands[1]) {
    progress +=10
    randomDemands()
    return
  }
  winnerCheck()
}
function demandCare () {
  if (messageEl.innerHTML === demands[2]) {
    progress += 10
    randomDemands ()
    return
  }
  winnerCheck()
}
function demandBall () {
    if (messageEl.innerHTML === demands[3]) {
      progress += 10
      randomDemands ()
      return
    }
    winnerCheck()
}


function winnerCheck() {
  if (progress >= 90) {
    winner.removeAttribute('hidden')
    messageEl.setAttribute('hidden', true)
    stopPlaying = true
    calmSound.pause()
  } else if ((progress <= 0) || timeLeft === 0) {
    loser.removeAttribute('hidden')
    stopPlaying = true
    calmSound.pause()

  }
}


let time = setInterval(function() {
    countdownEl.textContent = timeLeft + ' seconds remaining.';
    timeLeft -= 1;
    if (timeLeft < 0) {
          countdownEl.textContent = 'Demand time complete'
      }
    }, 1000)



