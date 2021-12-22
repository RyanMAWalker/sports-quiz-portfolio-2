//Wait for DOM to finish loading the quiz
document.addEventListener("DOMcontentLoaded", function () {
    startQuiz();
})

//List of references

const question = document.getElementById("question");

//convert the string of answers to an array
const answers = Array.from(document.getElementsByClassName("answer-text"));
console.log(answers);

function startQuiz() {}

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
]