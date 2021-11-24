var questionsEl = document.getElementById('questions');
var questions = [];
var questionPointer = 0;
var score = 0;

function nextQuestion() {
    questionPointer++;
}

function answerQuestion(event) {
    
    // what button was clicked
    var buttonEl = event.target;
    var answer = buttonEl.dataset.answer;

    var currentQuestion = questions[questionPointer];
    if(answer === currentQuestion.correct) {
        score =+10;
    } else if (answer !== currentQuestion.correct) {
        timer -10;
    }

    console.log(answer)

    nextQuestion();
}

questionsEl.addEventListener('click', answerQuestion);