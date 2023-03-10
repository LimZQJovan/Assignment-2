const question = document.querySelector('#question');
      choices = Array.from(document.querySelectorAll('.choice-text')),
      progressText = document.querySelector('#progressText'),
      scoreText = document.querySelector('#score'),
      wrong = document.getElementById("wrong"),
      correct = document.getElementById("correct");

      correct.volume = 0.4;
      wrong.volume =0.4;
           
      


let currentQuestion = {}
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
    let num1 = Math.floor(Math.random() * 20)
    let num2 = Math.floor(Math.random() * 20) + 1 // Ensure num2 is not zero
    let operator = '/'
    

    // Check if division result is not a whole number and generate a new operator if it is not
    if (operator === '/' && num1 % num2 !== 0) {
        return generateQuestion(operator = '/')
    }
    else{
        var correctAnswer = eval(`${num1} ${operator} ${num2}`)
        question = `What is ${num1} divided by ${num2}?`; 
    }


    // Generate choices for the math expression
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
for (let i = 0; i < 50; i++) {
    generateQuestion()
}

const SCORE_POINTS = 100 
const MAX_QUESTIONS = 50
startGame = () => { 
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] 
    getNewQuestion()
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) { 

        return window.location.assign('end-divide.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) 
    currentQuestion = availableQuestions[questionsIndex] 
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            correct.play();
            incrementScore(SCORE_POINTS)
            getNewQuestion()        
        }
        else{
          wrong.play();
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
          selectedChoice.parentElement.classList.remove(classToApply)
      }, 200)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()