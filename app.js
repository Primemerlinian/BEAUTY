/*-------------------------------- Constants --------------------------------*/

const demands = [
  'I need attention 🥺',
  'I am hungry! 😡',
  'Clean my teeth! 🦷',
  'Play ball with me !🎾'
]





/*-------------------------------- Variables --------------------------------*/

let progress, timer
let timeLeft= 10;
let demandProg = 0
let demandLoser = false





/*------------------------ Cached Element References ------------------------*/

const beginButton = document.getElementById('begin-button')
const messageEl = document.getElementById('message')
const attention = document.getElementById('attention')
const food = document.querySelector('#food')
const care = document.querySelector('#care')
const ball = document.querySelector('#ball')
const resetButton = document.querySelectorAll('#reset')
const countdownEl = document.getElementById('countdown')
const progressBar =  document.getElementById('.progress-bar')
let demandNum = Math.floor(Math.random()* demands.length)
// console.log(demands[demandNum])




/*----------------------------- Event Listeners -----------------------------*/


beginButton.addEventListener('click', begin)
// resetButton.addEventListener('click', reset)

attention.addEventListener('click', demandAttention)

food.addEventListener('click', demandFood)

care.addEventListener('click', demandCare)

ball.addEventListener('click', demandBall)



/*-------------------------------- Functions --------------------------------*/

init ()

function init() {
  demandProg = 0
}

function randomDemands () {
  let randomNum =  [Math.floor(Math.random() * demands.length)]
  return messageEl.innerHTML = demands[randomNum]
}
function begin () {
  let text = randomDemands ()
  messageEl.innerHTML = text
  beginButton.setAttribute('hidden', true)
  
}

function demandAttention() {
  if(messageEl.innerHTML === demands[0]) {
    console.log('sanity check')
    randomDemands()
    return
  }
}
function demandFood() {
  if (messageEl.innerHTML === demands[1]) {
    randomDemands()
    return
}
}
function demandCare () {
  if (messageEl.innerHTML === demands[2]) {
    randomDemands ()
    return
  }
}
function demandBall () {
    if (messageEl.innerHTML === demands[3]) {
      randomDemands ()
    return
  }
}

let time = setInterval(function() {
    countdownEl.textContent = timeLeft + ' seconds remaining.';
    timeLeft -= 1;
    if (timeLeft < 0) {
          countdownEl.textContent = 'Demand time complete'
      }
    }, 1000)
    
    

    

