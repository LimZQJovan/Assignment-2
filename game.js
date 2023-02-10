const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text')); 
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score=0
let questionCounter = 0
let availableQuestions = []

let questions = []
const generateQuestion = () => {
    let question = ''
    let choice1 = ''
    let choice2 = ''
    let choice3 = ''
    let choice4 = ''
    let answer = 0

    // Generate a random math expression with addition, subtraction, multiplication, or division
    let num1 = Math.floor(Math.random() * 10)
    let num2 = Math.floor(Math.random() * 10) + 1 // Ensure num2 is not zero
    let operator = Math.random()
    if (operator < 0.25) {
        operator = '+'
    } else if (operator < 0.5) {
        operator = '-'
    } else if (operator < 0.75) {
        operator = '*'
        operator_name = 'times'
    } else {
        operator = '/'
        operator_name = 'divided by'
        num1 = Math.floor(Math.random() * 20)
    }
    if (operator === '-' && num1 < num2) {
        return generateQuestion(operator = 0.25)
    }
    // Check if division result is not a whole number and generate a new operator if it is not
    if (operator === '/' && num1 % num2 !== 0) {
        return generateQuestion(operator = 1)
    }
    if (operator === '*' || operator === '/') {
        question = `What is ${num1} ${operator_name} ${num2}?`
    }
    else {
        question = `What is ${num1} ${operator} ${num2}?`
    }
    // Generate choices for the math expression
    const correctAnswer = eval(`${num1} ${operator} ${num2}`)
    answer = Math.floor(Math.random() * 4) + 1
    switch (answer) {
        case 1:
            choice1 = correctAnswer
            choice2 = correctAnswer + Math.floor(Math.random() * 5) + 1
            choice3 = correctAnswer - Math.floor(Math.random() * 5) - 1
            choice4 = correctAnswer + Math.floor(Math.random() * 10) + 1
            break
        case 2:
            choice2 = correctAnswer
            choice1 = correctAnswer + Math.floor(Math.random() * 5) + 1
            choice3 = correctAnswer - Math.floor(Math.random() * 5) - 1
            choice4 = correctAnswer + Math.floor(Math.random() * 10) + 1
            break
        case 3:
            choice3 = correctAnswer
            choice1 = correctAnswer + Math.floor(Math.random() * 5) + 1
            choice2 = correctAnswer - Math.floor(Math.random() * 5) - 1
            choice4 = correctAnswer + Math.floor(Math.random() * 10) + 1
            break
        case 4:
            choice4 = correctAnswer
            choice1 = correctAnswer + Math.floor(Math.random() * 5) + 1
            choice2 = correctAnswer - Math.floor(Math.random() * 5) - 1
            choice3 = correctAnswer + Math.floor(Math.random() * 10) + 1
            break
    }

    // Push the generated question and choices into the questions array
    questions.push({
        question,
        choice1,
        choice2,
        choice3,
        choice4,
        answer,
    })
}


// Generate and push 15 random questions into the questions array
for (let i = 0; i < 15; i++) {
    generateQuestion()
}

const SCORE_POINTS = 100 
const MAX_QUESTIONS = 15
startGame = () => { 
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] 
    getNewQuestion()
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) { 
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) 
    currentQuestion = availableQuestions[questionsIndex] 
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
            correct.play();
        }
        else{
            wrong.play();
        }
        

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 300)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
let countdown = document.querySelector('#countdown');

// Start the countdown from 60 seconds
let timeLeft = 30;

// Set the color of the countdown to green
countdown.style.color = 'green';

// Update the countdown every second
let timerId = setInterval(() => {
  timeLeft--;
  countdown.innerHTML = timeLeft;

  // Change the color of the countdown to red when there are 10 seconds left
  if (timeLeft <= 5) {
    countdown.style.color = 'red';
  }

  // Stop the timer when the time is up
  if (timeLeft === 0) {
    clearInterval(timerId);
    // localStorage.setItem('mostRecentScore', score)
    // window.location.assign('end.html')

  }
}, 1000);



startGame()
