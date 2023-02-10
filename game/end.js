// const username = document.querySelector('#username') 
// const saveScoreBtn = document.querySelector('#saveScoreBtn') 
// const finalScore = document.querySelector('#finalScore')
// const mostRecentScore = localStorage.getItem('mostRecentScore')
// // const MAX_HIGH_SCORES = 5
// const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => { 
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
    score: mostRecentScore,
    name: username.value
    }

    highScores.push(score)
    
    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('../index.html')
}


// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

// const firebaseConfig = {
// apiKey: "AIzaSyDaPtDKd2-ogeeeAI-EJmGULRjAL47usr4",
// authDomain: "id-assgn-2.firebaseapp.com",
// databaseURL: "https://id-assgn-2-default-rtdb.asia-southeast1.firebasedatabase.app",
// projectId: "id-assgn-2",
// storageBucket: "id-assgn-2.appspot.com",
// messagingSenderId: "410083931076",
// appId: "1:410083931076:web:c34e6c7c5c2c0649d5aa91",
// measurementId: "G-0FQ3F8J01D"
// };

// //  Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// import { getDatabase, ref, set, child, get, update, remove }
//     from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// const db = getDatabase();
// const username = document.querySelector('#username') 
// const saveScoreBtn = document.querySelector('#saveScoreBtn') 
// const finalScore = document.querySelector('#finalScore')
// const mostRecentScore = localStorage.getItem('mostRecentScore')


// finalScore.innerText = mostRecentScore;

// saveHighScore = e => {
//     e.preventDefault()

//     // Store the high score
//     db.ref("highscore").push({
//         name: username.value,
//         highscore: mostRecentScore
//     });

//     window.location.assign('../index.html')
// }
