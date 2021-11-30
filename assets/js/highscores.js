var highscores = JSON.parse(localStorage.getItem("user")) || []
console.log(highscores)
highscores.forEach(highscore => {
    var scoreEl = document.createElement("p")
    scoreEl.innerText = highscore.name + ": " + highscore.score
    document.querySelector("#scoreboard").appendChild(scoreEl)
})