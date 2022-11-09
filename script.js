'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!')

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber)
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore
    }

    // When gues is wrong 
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🎆 You lost the game!')
      document.querySelector('.score').textContent = 0;
    }
  }
})

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // Reset message text and input field
  displayMessage('Start guessing...');
  displayNumber('?')
  document.querySelector('.guess').value = null;

  // Reset score and secret number
  document.querySelector('.score').textContent = score;

  // Reset styles 
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  console.log('again');
})
