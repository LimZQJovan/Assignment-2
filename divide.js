const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      option4= document.getElementById("option4"),   
      wrong = document.getElementById("wrong"),
      correct = document.getElementById("correct"),
      scoreText = document.querySelector('#score'),
      POINTS = 100;
var answer = 0;

function generate_equation(){ 
  var num1 = Math.floor(Math.random() * 20),
      num2 = Math.floor(Math.random() * 20),
      dummyAnswer1 = Math.floor(Math.random() * 10),
      dummyAnswer2 = Math.floor(Math.random() * 10),
      dummyAnswer3 = Math.floor(Math.random() * 10),
      allAnswers = [],
      switchAnswers = [];

    if(num1%num2 === 0 && num1 !=0){
        answer = eval(num1 / num2);
        document.getElementById("question").innerHTML = `What is ${num1} divided by ${num2}?`; 
    }
    else if (num2%num1 == 0 && num2 != 0){
        answer = eval(num2/num1);
        document.getElementById("question").innerHTML = `What is ${num2} divided by ${num1}?`; 
    }
    else{
        generate_equation();
    }
  
  allAnswers = [answer, dummyAnswer1, dummyAnswer2,dummyAnswer3];

  for (i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
  option4.innerHTML = switchAnswers[3];
};



option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
      incrementScore(POINTS);
      questionIncrement();
      correct.play();
      generate_equation();
    }
    else{
        wrong.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      incrementScore(POINTS);
      questionIncrement();
      correct.play();
      generate_equation();
    }
    else{
        wrong.play();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
      incrementScore(POINTS);
      questionIncrement();
      correct.play();
      generate_equation();
    }
    else{
        wrong.play();
    }
});
option4.addEventListener("click", function(){
    if(option4.innerHTML == answer){
      incrementScore(POINTS);
      questionIncrement();
      correct.play();
      generate_equation();
    }
    else{
        wrong.play();
    }
});

startGame = () => { 
    questionCounter = 1 
    score = 0
    progressText.innerHTML = `Question ${questionCounter}`;
}

incrementScore = num => {
    score += num
    scoreText.innerHTML = score
}

questionIncrement = () => {
    questionCounter += 1;
    progressText.innerHTML = `Question ${questionCounter}`;
}

generate_equation()
startGame()

