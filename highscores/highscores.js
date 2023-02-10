const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} ${score.score}</li>`
}).join('')

//To remove all the players from the leaderboard
// localStorage.removeItem('highScores');
// highScoresList.innerHTML = '';
