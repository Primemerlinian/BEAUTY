/*-------------------------------- Constants --------------------------------*/

const demands = [
  'I need attention 🥺🐾',
  'I am hungry 😡',
  'Clean my teeth 🦷',
  'Play ball with me 🎾'
]





/*-------------------------------- Variables --------------------------------*/

let timer
let timeLeft= 10;
let progress= 0
let demandLoser = false
let demandTime = 40





/*------------------------ Cached Element References ------------------------*/

const beginButton = document.getElementById('begin-button')
const messageEl = document.getElementById('message')
const attention = document.getElementById('attention')
const food = document.querySelector('#food')
const care = document.querySelector('#care')
const ball = document.querySelector('#ball')
// const resetButton = document.querySelectorAll('#reset')
const countdownEl = document.getElementById('countdown')
const progBar = document.querySelectorAll('.progress-bar')
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
  progBar.item(0).setAttribute('style', `width: ${progress}%`)
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
    randomDemands()
    return
  }
  progress += 10
}
function demandFood() {
  if (messageEl.innerHTML === demands[1]) {
    randomDemands()
    return
  }
  progress +=10
}
function demandCare () {
  if (messageEl.innerHTML === demands[2]) {
    randomDemands ()
    return
  }
  progress += 10
}
function demandBall () {
    if (messageEl.innerHTML === demands[3]) {
      randomDemands ()
      return
    }
    progress += 10
}







let time = setInterval(function() {
    countdownEl.textContent = timeLeft + ' seconds remaining.';
    timeLeft -= 1;
    if (timeLeft < 0) {
          countdownEl.textContent = 'Demand time complete'
      }
    }, 1000)



