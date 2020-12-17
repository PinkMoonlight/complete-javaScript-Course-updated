'use strict';

// Selecting DOM elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

let init = function () {
  // set/reset state values
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // reset UI
  player0El.classList.remove('player--winner', 'name');
  player1El.classList.remove('player--winner', 'name');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  // hide dice
  diceEl.classList.add('hidden');
};
init();

//  Switch players
const nextPlayer = function () {
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ***** EVENT HANDLERS *****
// Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. check if rolled a 1, if true, switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //switch to next player
      nextPlayer();
    }
  }
});

// Hold button functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if total score is >= 100, Finish game, else switch player
    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner', 'name') +
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      playing = false;
      // could hide dice here if want, once winner declared
    } else nextPlayer();
  }
});

// 'New Game' button functionality
btnNew.addEventListener('click', init);
