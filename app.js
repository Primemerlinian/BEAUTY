/*-------------------------------- Constants --------------------------------*/

const demands = [
  'I need attention 🥺',
  'I am hungry! 😡',
  'Clean my teeth! 🦷',
  'Play with me !🎾'

]





/*-------------------------------- Variables --------------------------------*/

let timeLeft= 10;




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

attention.addEventListener('click', handleClick)

food.addEventListener('click', handleClick)

care.addEventListener('click', handleClick)

play.addEventListener('click', handleClick)



/*-------------------------------- Functions --------------------------------*/




let time = setInterval(function() {
  countdownEl.textContent = timeLeft + ' seconds remaining.';
  timeLeft -= 1;
  if (timeLeft < 0) {
      countdownEl.textContent = 'Finished!'
  }
}, 1000)