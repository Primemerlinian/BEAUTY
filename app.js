/*-------------------------------- Constants --------------------------------*/

const demands = [
  'I need attention 🥺',
  'I am hungry! 😡',
  'Clean my teeth! 🦷',
  'Play ball with me !🎾'
]





/*-------------------------------- Variables --------------------------------*/

let progress, timer




/*------------------------ Cached Element References ------------------------*/

const beginButton = document.getElementById('begin-button')
const messageEl = document.getElementById('message')
const attentionButton = document.querySelectorAll('#attention')
const foodButton = document.querySelectorAll('#food')
const careButton = document.querySelectorAll('#care')
const playButton = document.querySelectorAll('#play')
const resetButton = document.querySelectorAll('#reset')
const countdownEl = document.getElementById('countdown')
const progressBar =  document.getElementById('.progress-bar')



/*----------------------------- Event Listeners -----------------------------*/


beginButton.addEventListener('click', begin)

// attention.addEventListener('click', handleClick)

// food.addEventListener('click', handleClick)

// care.addEventListener('click', handleClick)

// play.addEventListener('click', handleClick)



/*-------------------------------- Functions --------------------------------*/

init ()

function init() {
  clearInterval(timer)
  progress = 0
}

function randomDemands () {
  return messageEl.textContent = randomDemands = Math.floor[(Math.random()* randomDemands.length)];
}
function begin () {
  let text = randomDemands ()
  messageEl.textContent = text
  beginButton.setAttribute('hidden', true)
  let timeLeft = 40
  
}


// let time = setInterval(function() {
//     countdownEl.textContent = timeLeft + ' seconds remaining.';
//     timeLeft -= 1;
//     if (timeLeft < 0) {
//           countdownEl.textContent = 'Demand time complete'
//       }
//     }, 1000)
    

