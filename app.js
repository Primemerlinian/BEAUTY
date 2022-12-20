/*-------------------------------- Constants --------------------------------*/

const demands = [
  'I need attention 🥺',
  'I am hungry! 😡',
  'Clean my teeth! 🦷',
  'Play ball with me !🎾'
]





/*-------------------------------- Variables --------------------------------*/

let timeLeft= 60;




/*------------------------ Cached Element References ------------------------*/

const beginButton = document.querySelectorAll('.begin')
const attentionButton = document.querySelectorAll('#attention')
const foodButton = document.querySelectorAll('#food')
const careButton = document.querySelectorAll('#care')
const playButton = document.querySelectorAll('#play')
const resetButton = document.querySelectorAll('#reset')
let countdownEl = document.getElementById('countdown')



/*----------------------------- Event Listeners -----------------------------*/

// begin.addEventListener('click', beginGame)

// attention.addEventListener('click', handleClick)

// food.addEventListener('click', handleClick)

// care.addEventListener('click', handleClick)

// play.addEventListener('click', handleClick)



/*-------------------------------- Functions --------------------------------*/

init ()

function init() {
  timer = 0
  beginButton.style = 'display: block'

}

function render () {
  return messageEl.textContent = demands[Math.floor(Math.random)*demands.length]
}


// let time = setInterval(function() {
//   countdownEl.textContent = timeLeft + ' seconds remaining.';
//   timeLeft -= 1;
//   if (timeLeft < 0) {
//       countdownEl.textContent = 'Demand time complete'
//   }
// }, 1000)