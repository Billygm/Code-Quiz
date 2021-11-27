var welcomeEl = document.getElementById("welcome");
var questionsEl = document.getElementById("questions");
var startEl = document.getElementById("start");
var recordScore = document.querySelector("#highscores");
var timerEl = document.getElementById("timer");
var nameInput = document.querySelector("#name");
var scoreInput = document.querySelector("#score");
var saveScoreButton = document.querySelector("#saveScore");
var highscores = JSON.parse(localStorage.getItem("score")) || [];
var score = 0;
var timer = 5;
var questions = [
    {
        question: "What's the foundation to any webpage?",
        choices: ["CSS", "HTML", "JavaScript", "Bootstrap"],
        correctanswer: "HTML"
    },
    {
        question: "What does HTML stand for?",
        choices: ["Hyper-Text Markup Language", "How To Meet Ladies", "How To Make Lasagna", "Hyperlinks and Text Messaging Language"],
        correctanswer: "Hyper-Text Markup Language"
    },
    {
        question: "What does CSS stand for",
        choices: ["Captain Sloppy Soup", "Content Style Selectors", "Correcting Styles and Sentances", "Cascading Style Sheet"],
        correctanswer: "Cascading Style Sheet"
    },
    {
        question: "A 'true' or 'false' variable is called a boolean.",
        choices: [true, false],
        correctanswer: true
    },
    {
        question: "What's the foundation to any webpage?",
        choices: ["CSS", "HTML", "JavaScript", "Bootstrap"],
        correctanswer: "HTML"
    },
];
var questionPointer = 0;
var currentQuestion = questions[questionPointer];

recordScore.setAttribute("style", "display:none");

function startQuiz() {
    welcomeEl.textContent = "";
    console.log(currentQuestion);
    renderDisplay();
    // the countdown timer
    var timeInterval = setInterval(function () {
        if (timer >= 0) {
            timerEl.textContent = timer;
            timer--;
        } else {
            questionsEl.textContent = "GAME OVER! Please record your score.";
            recordScore.setAttribute("style", "display:show");
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
};

function renderDisplay() {
    questionsEl.textContent = currentQuestion.question;
    currentQuestion.choices.forEach(function (choice) {
        var questionButton = document.createElement("button")
        questionButton.innerText = choice
        questionsEl.appendChild(questionButton)
        /////////////////////////////////////////
    })
};

function nextQuestion() {
    questionPointer++;
    currentQuestion = questions[questionPointer];
    renderDisplay();
};

function answerQuestion(event) {

    // what button was clicked
    var buttonEl = event.target;
    var answer = buttonEl.innerText;

    if (answer === currentQuestion.correctanswer) {
        score + 10;
    } else {
        timer - 10;
    }

    console.log(score)
    console.log(answer)

    nextQuestion();
};

saveScoreButton.addEventListener("click", function (event) {
    event.preventDefault();

    var user = {
        name: nameInput.value.trim(),
        score: scoreInput.value.trim(),
    }
    highscores.push(user)
    localStorage.setItem("user", JSON.stringify(highscores));
});

startEl.addEventListener("click", startQuiz);
questionsEl.addEventListener("click", answerQuestion);