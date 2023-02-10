// const highScoresList = document.querySelector('#highScoresList')
// const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// highScoresList.innerHTML =
// highScores.map(score => {
//     return `<li class="high-score">${score.name} ${score.score}</li>`
// }).join('')

//To remove all the players from the leaderboard
// localStorage.removeItem('highScores');
// highScoresList.innerHTML = '';


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyDaPtDKd2-ogeeeAI-EJmGULRjAL47usr4",
authDomain: "id-assgn-2.firebaseapp.com",
databaseURL: "https://id-assgn-2-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "id-assgn-2",
storageBucket: "id-assgn-2.appspot.com",
messagingSenderId: "410083931076",
appId: "1:410083931076:web:c34e6c7c5c2c0649d5aa91",
measurementId: "G-0FQ3F8J01D"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, set, child, get, update, remove }
    from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();

// Get a reference to the highscore child of the database
var highscoreRef = db.ref("highscore");

// Use the `once()` method to retrieve the data
highscoreRef.once("value", function(snapshot) {
  // Get the highscore data from the snapshot
  var highscore = snapshot.val();

  // Get the username from the highscore data
  var username = highscore.name;

  // Get the actual highscore
  var highscore = highscore.score;

  highScoresList.innerHTML =
  highScores.map(highscore => {
      return `<li class="high-score">${username} ${highscore}</li>`
  }).join('')
});