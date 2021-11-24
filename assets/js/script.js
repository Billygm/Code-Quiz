var welcomeEl = document.getElementById('welcome');
var questionsEl = document.getElementById('questions');
var resultsEl = document.getElementById('results');
var startEl = document.getElementById('start');
var correctEl = document.getElementById('correct');
var questions = [
    {
        
    }
];
var score = 0;
var timer = 60;
var questionPointer = 0;
var currentQuestion = questions[questionPointer];

startEl.addEventListener('click', startQuiz)
    function startQuiz() {
        questionsEl.textContent = currentQuestion;
        welcomeEl.textContent = "";
    }

function nextQuestion() {
    questionPointer++;
}

function answerQuestion(event) {
    
    // what button was clicked
    var buttonEl = event.target;
    var answer = buttonEl.dataset.answer;

    if(answer === currentQuestion.correct) {
        score =+10;
    } else if (answer !== currentQuestion.correct) {
        timer -10;
    }

    console.log(answer)

    nextQuestion();
}

questionsEl.addEventListener('click', answerQuestion);