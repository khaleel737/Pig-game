'use strict';

// Game Settings

const player0 = document.getElementById('score--0');
const player1 = document.getElementById('score--1');
const PlayerZero = document.querySelector('#current--0');
const PlayerOne = document.querySelector('#current--1');
const playeronZero = document.querySelector('.player--0');
const playeronOne = document.querySelector('.player--1');
const diceSelector = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const newRoll = document.querySelector('.btn--roll');
const holdRoll = document.querySelector('.btn--hold');

let allScores, currentScore, activePlayer, gameActive;



const playerSwitching = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playeronZero.classList.toggle('player--active');
    playeronOne.classList.toggle('player--active');
};

const newG = function () {
// allScores = [0, 0];
playeronZero.classList.add('player--active');
playeronOne.classList.remove('player--active');
playeronOne.classList.remove('player--winner');
playeronZero.classList.remove('player--winner');
allScores = [0, 0];
currentScore = 0;
activePlayer = 0;
gameActive = true;


player0.textContent = 0;
player1.textContent = 0;
PlayerZero.textContent = 0;
PlayerOne.textContent = 0;

// Document Queries

document.querySelector('.dice').classList.add('hidden');

}

newG();

// document.querySelector('.dice').classList.add('hidden');

player0.textContent = 0;
player1.textContent = 0;
PlayerZero.textContent = 0;
PlayerOne.textContent = 0;


// New Roll



newRoll.addEventListener('click',  () => {
    if(gameActive) {
        const diceRandom = Math.floor(Math.random() * 6) + 1;

    diceSelector.classList.remove('hidden');
    diceSelector.src = `dice-${diceRandom}.png`;

    // Conditionals

    if(diceRandom !== 1) {
        currentScore += diceRandom;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        playerSwitching();
} 
    }
})

// HoldRoll

holdRoll.addEventListener('click', () => {
    if(gameActive) {

    allScores[activePlayer] += currentScore;
    
    document.getElementById(`score--${activePlayer}`).textContent = allScores[activePlayer];



    // Winner 
    if(allScores[activePlayer] >= 100) {
        gameActive = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector('.dice').classList.add('hidden');
    } else {
        playerSwitching();
    }

}

})

// New Game

newGame.addEventListener('click', () => {
    newG();
})



