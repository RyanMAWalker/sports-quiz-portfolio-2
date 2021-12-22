/*jshint esversion: 6 */

// Code base for highscores taken from youtube video https://www.youtube.com/watch?v=f4fB9Xg2JEY

const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


//Converts high scores recieved from local storage and converts into an array or if returns null
//Initialises an empty array is produced
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = mostRecentScore;

//Set to disabled unless the input username section is populated.
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// Prevents user from clicking save
saveHighScore = e => {
    e.preventDefault();

    //
    const score = {
        score: mostRecentScore,
        name: username.value
    };

    //Adds score to list
    highScores.push(score);

    //Sorts list
    highScores.sort((a,b) =>  b.score - a.score);

    //Cuts off top 5 scores
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
};

// quit button 
const quitBtn = document.getElementById("homepage");

quitBtn.addEventListener('onclick', () => {
    localStorage.clear();
});
