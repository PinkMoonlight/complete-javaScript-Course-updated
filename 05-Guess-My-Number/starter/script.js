'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// For Test Only
//document.querySelector('.number').textContent = secretNumber;

//function to update message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// function to check the Players Guess
let checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  // When no input
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess > 20) {
    displayMessage('⛔️ Number must be between 1 & 20!!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Too high... ' : '📉 Too low... '
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

// Event Listeners
document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('body').addEventListener('keyup', function (e) {
  if (e.code === 'Enter') {
    checkGuess();
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage('Start guessing... ');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
