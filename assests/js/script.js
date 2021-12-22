/*jshint esversion: 6 */

//Wait for DOM to finish loading the quiz
document.addEventListener("DOMcontentLoaded", function () {
    startQuiz();
});

//List of references

//Get question element from the DOM
const question = document.getElementById("question");

//convert the string of answers to an array
const answersOptions = Array.from(document.getElementsByClassName("answer-text"));

// Get question counter and score
const counterText = document.getElementById("counter");
const scoreText = document.getElementById("score");

//Progess bar reference
const progressBar = document.getElementById("full-bar");

//To start quiz function I need questions to define in the form of an array

let questions = [
    {
        question: "Who won the formula 1 drivers championship?",
        option1: "Lewis Hamilton",
        option2: "Max Verstappen",
        option3: "Michael Masi",
        option4: "Valtteri Bottas",
        answer: 2
    },
    {
        question: "Who won the mens ballon d'or?",
        option1: "Lionel Messi",
        option2: "Robert Lewandowski",
        option3: "Cristiano Ronaldo",
        option4: "Jorginho",
        answer: 1
    },
    {
        question: "Which athelete in the Tokyo 2021 olympics won the most individual medals?",
        option1: "San An",
        option2: "Elaine Thompson-Herah",
        option3: "Emma Mckeon",
        option4: "Caeleb Dressel",
        answer: 4
    },
    {
        question: "Which country won the mens Euros?",
        option1: "Italy",
        option2: "Germany",
        option3: "England",
        option4: "Portugal",
        answer: 1
    },
    {
        question: "Which female tennis star won the US open?",
        option1: "Karolina Pliskova",
        option2: "Leylah Fernandez",
        option3: "Emma Raducanu",
        option4: "Maria Sakkari",
        answer: 3
    },
];

//Define variables

let currentQuestion = {}; 
let acceptingAnswers = false;
let avaliableQuestions = [];
//Incrimental vairables
let score = 0;
let questionCounter = 0;


//Game constants
const maxQuestions = 5;
const correctAnswer = 10;

//Code line taken from Slack and Discord see assets/images/discord and
//assets/images/slack
/**
 * The Main game function, to start the quiz.
 */
function startQuiz () {
    score = 0;
    questionCounter = 0;
    avaliableQuestions = [ ... questions];
    console.log(avaliableQuestions)
    getNewQuestion();
}

const getNewQuestion = function () {

    if (questionCounter >= maxQuestions || avaliableQuestions.length === 0 ) {
        localStorage.setItem('mostRecentScore', score);
        
        return window.location.assign("/submit.html");
    }

// Increases counter from 0 by 1
    questionCounter++;
    
    counterText.innerText = `${questionCounter}/${maxQuestions}`;

    fullProgressBar();

//Generates a random number from the avaliable questions array defined in the startQuiz function.
//.length specifies the number of questions avaliable from [...questions]
    const questionIndex = Math.floor(Math.random() * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[questionIndex];

// inputs the text of the "pulled" question
    question.innerText = currentQuestion.question; 

//inputs the answer for the question pulled above

    answersOptions.forEach(function (answersOptions){
        const number = answersOptions.dataset['number'];
        answersOptions.innerText = currentQuestion['option'+ number];
    });

//Removes the question just used
    avaliableQuestions.splice(questionIndex, 1); 

    acceptingAnswers = true;

};


answersOptions.forEach(function(answersOptions){
    answersOptions.addEventListener("click", function (event) {
        if(!acceptingAnswers)return;

        acceptingAnswers = false;

        let selectedOption = event.target;
        
        //Reads the selected data-number of the user's target and locally stores it
        let selectedAnswer = selectedOption.dataset["number"];
        
        //Comparrison between user's selected answer and the correct answer
        //which assigns an 'incorrect' or 'correct' which allows a CCS style to
        //be applied for visiual representation. 
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        selectedOption.parentElement.classList.add(classToApply);

        //Increases score by 10
        if (classToApply === 'correct') {
            increaseScore(correctAnswer);
        }


        //Removes the class after a time invterval of 2 seconds and calls new questions
        setTimeout(undoFill,2000);

        function undoFill(){
            selectedOption.parentElement.classList.remove(classToApply);
            //Calls new question from the now reduced array
            getNewQuestion();
        }
                
    });
});

/**
 * Increases score
 */
function increaseScore(num) {
    score += num;
    scoreText.innerText = score;
}

/**
 * Updates progress bar
 */
function fullProgressBar (){
    progressBar.style.width = `${(questionCounter / maxQuestions) * 100}%`;
}

/**
 * Starts the game
 */
startQuiz();




