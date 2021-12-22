/* jshint esversion 6 */
const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


//interacts with high scores on the homepage. 
highScoresList.innerHTML = highScores.map( score => {
    return (`<li class="high-score">${score.name} - ${score.score}</li>`);
}).join("");
