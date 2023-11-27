'use strict';

const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const again = document.querySelector('.again');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.querySelector('body');

let actualNumber = Math.trunc(Math.random()*20) + 1;

check.addEventListener('click', function() {
    const numberGuessed = Number(guess.value); 
    if(!numberGuessed) {
        message.textContent = `No number :0`;
    }
    else {
        if(numberGuessed === actualNumber) {
            message.textContent = 'Correct! :)'; 
            number.textContent = actualNumber;
            if(score.textContent > highscore.textContent) {
                highscore.textContent = score.textContent;
            }
            body.style.backgroundColor = 'green';
            check.style.display = 'none';
        }
        else {
            if(numberGuessed > actualNumber) {
                message.textContent = 'Too large :|'; 
                score.textContent -= 1;
                if(score.textContent == 0) {
                    body.style.backgroundColor = 'red';
                    message.textContent = 'Game over :(';
                    check.style.display = 'none';
                }
            }
            else {
                message.textContent = 'Too small :/';
                score.textContent -= 1;
                if(score.textContent == 0) {
                    body.style.backgroundColor = 'red';
                    message.textContent = 'Game over :(';
                    check.style.display = 'none';
                }
            }
        }
    }
})

again.addEventListener('click', function() {
    number.textContent = '?';
    actualNumber = Math.trunc(Math.random()*20) + 1;
    guess.textContent = '';
    score.textContent = 20;
    message.textContent = 'Start guessing...';
    body.style.backgroundColor = '#222';
    check.style.display = 'inline-block';
})