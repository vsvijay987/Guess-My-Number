"use strict";
import 'core-js/stable';

let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
// console.log(score);
// console.log(number);
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector('.again').addEventListener
('click', function(){
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector(".message").textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector(".number").textContent = '?';
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".guess").value = '';
})

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess);

    if (!guess) {
        // document.querySelector(".message").textContent = "No Number!";
        displayMessage('No Number!');
    } else if (guess === number) {
        document.querySelector('.number').style.width = '30rem';
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").textContent = number;
        // document.querySelector(".message").textContent = "Correct Number!";
        displayMessage('Correct Number!');
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if( guess !== number){
        if (score > 1){
            // document.querySelector(".message").textContent = guess > number ? 'Too High!':'Too Low!';
            displayMessage(guess > number ? 'Too High!':'Too Low!')
            score = score - 1;
            document.querySelector(".score").textContent = score;
        }else{
            // document.querySelector(".message").textContent = "You Lost The Game!";
            displayMessage('You Lost The Game!');
            document.querySelector(".score").textContent = 0;
        }

    // } else if (guess > number) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Too High!";
    //         score = score - 1;
    //         // console.log(score);
    //         document.querySelector(".score").textContent = score;
    //         // console.log(score);
    //     } else {
    //         document.querySelector(".message").textContent = "You Lost The Game!";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // } else {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Too Low!";
    //         score = score - 1;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "You Lost The Game!";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }

}

});