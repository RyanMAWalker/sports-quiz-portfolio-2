// Code base for highscores taken from youtube video https://www.youtube.com/watch?v=f4fB9Xg2JEY

const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = document.querySelector('#mostRecentScore')


const highScore = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScore = 50; 

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
    console.log("clicked save")
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score);

    highScores.sort((a,b) =>{
        return b.score - a.score;
    })

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/');
};

