var welcomeEl = document.getElementById("welcome");
var questionsEl = document.getElementById("questions");
var startEl = document.getElementById("start");
var recordScore = document.querySelector("#highscores");
var timerEl = document.getElementById("timer");
var nameInput = document.querySelector("#name");
var scoreInput = document.querySelector("#score");
var saveScoreButton = document.querySelector("#saveScore");
var tryAgainButton = document.querySelector("#tryAgain");
var highscores = JSON.parse(localStorage.getItem("score")) || [];
var currentScore = 0;
var timer = 50;
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
        choices: ["Captain Sloppy Soup", "Content Style Selector", "Computer Styles Sheet", "Cascading Style Sheet"],
        correctanswer: "Cascading Style Sheet"
    },
    {
        question: "A 'true' or 'false' variable is called a boolean.",
        choices: [true, false],
        correctanswer: true
    },
    {
        question: "What element does the JavaScript go inside?",
        choices: ["<link>", "<js>", "<rel>", "<script>"],
        correctanswer: "<script>"
    },
    {
        question: "What element does the CSS go inside?",
        choices: ["<link>", "<js>", "<src>", "<script>"],
        correctanswer: "<link>"
    },
    {
        question: "Where in an HTMl document is the correct place to insert a JavaScript?",
        choices: ["The <head> section", "The <body> section", "Either the <head> or <body> section", "You dont have to link your JavaScript for it to work"],
        correctanswer: "The <body> section"
    },
    {
        question: "Where in an HTML document is the correct place to link your CSS?",
        choices: ["The <head> section", "The <body> section", "Either the <head> or <body> section", "You dont have to link your CSS for it to work"],
        correctanswer: "The <head> section"
    }
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
        if (timer > 0) {
            timerEl.textContent = timer;
            timer--;
        } else {
            questionsEl.textContent = "GAME OVER! Please record your score.";
            recordScore.setAttribute("style", "display:show");
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
        if (currentQuestion === undefined) {
            timer = 0;
        }
    }, 1000);
};

function renderDisplay() {
    if (currentQuestion === undefined) {
        return;
    } else {
        questionsEl.textContent = currentQuestion.question;
        currentQuestion.choices.forEach(function (choice) {
            var questionButton = document.createElement("button")
            questionButton.innerText = choice
            questionsEl.appendChild(questionButton)
            questionButton.addEventListener("click", answerQuestion);
        });
    };
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
        currentScore = currentScore + 10;
    } else {
        timer = timer - 10;
    }

    console.log(currentScore)
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
    alert("Your score was saved. Click try again to play again, to view your scores click 'View Highscores'")
});

startEl.addEventListener("click", startQuiz);
tryAgainButton.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
    return false;
});