var welcomeEl = document.getElementById("welcome");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("results");
var startEl = document.getElementById("start");
var correctEl = document.getElementById("correct");
var q1El = document.getElementById("q1");
var q2El = document.getElementById("q2");
var timerEl = document.getElementById("timer");
var timer = 60;

var questions = [
    {
        q1El
    },
    {
        q2El
    }
];
var score = 0;
var questionPointer = 1;
var currentQuestion = questions[questionPointer];

startEl.addEventListener("click", startQuiz)
    function startQuiz() {
        questionsEl.textContent = currentQuestion;
        welcomeEl.textContent = "";
        console.log(currentQuestion);

        var timeInterval = setInterval(function () {
            if (timer >= 0) {
                timerEl.textContent = timer;
                timer--;
            } else {
                timerEl.textContent = "";
                clearInterval(timeInterval);
            }
            
        }, 1000)
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

questionsEl.addEventListener("click", answerQuestion);