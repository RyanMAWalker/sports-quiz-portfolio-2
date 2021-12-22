//Wait for DOM to finish loading the quiz
document.addEventListener("DOMcontentLoaded", function(){
    startQuiz();
})

//List of references

const question = document.getElementById("question");

//convert the string of answers to an array
const answers = Array.from(document.getElementsByClassName("answer-text"));

console.log(answers);

function startQuiz () {

}

