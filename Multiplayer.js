var btnRef = document.querySelectorAll(".button-option");
var popupRef = document.querySelector(".popup");
var newgameBtn = document.getElementById("new-game");
var restartBtn = document.getElementById("restart");
var msgRef = document.getElementById("message");
//Winning Pattern Array
var winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Player 'X' plays first
var xTurn = true;
var count = 0;
//Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //enable popup
  popupRef.classList.remove("hide");
};
//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //disable popup
  popupRef.classList.add("hide");
};
//This function is executed when a player wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};
//Function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};
//New Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
//Win Logic
const winChecker = () => {
  //Loop through all win patterns
  for (var i of winningPattern) {
    var [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //Check if elements are filled
    //If 3 empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};

function askAddMathQuestion() {
    var num1 = Math.floor(Math.random() * 10 + 1);
    var num2 = Math.floor(Math.random() * 10 + 1);
    var addans = num1 + num2;  
    var userAnswer = prompt(`What is the sum of ${num1} and ${num2}?`);
    if (userAnswer == addans) {
        return true;
    } else {
        return false;
    }   
}

function askSubMathQuestion() {
    var num1 = Math.floor(Math.random() * 10 + 1);
    var num2 = Math.floor(Math.random() * 10 + 1);
    if (num2 > num1){
        var subans = num2-num1;
        var userAnswer = prompt(`What is the difference of ${num2} and ${num1}?`);
        if (userAnswer == subans) {
            return true;
          } else {
            return false;
          }
    }
    else{
        var ans = askAddMathQuestion();
        if(ans==true){
            return true;
        }
    }
  }



//Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
      //Ask a question and get the answer
      let answer = askSubMathQuestion();
      //Check if answer is correct  
      if (answer == true) {
        if (xTurn) {
          xTurn = false;
          //Display X
          element.innerText = "X";
          element.disabled = true;
        } else {
          xTurn = true;
          //Display O
          element.innerText = "O";
          element.disabled = true;
        }
        //Increment count on each click
        count += 1;
        if (count == 9) {
          drawFunction();
        }
        //Check for win on every click
        winChecker();
      } else {
        //Skip player's turn if answer is incorrect
        xTurn = !xTurn;
      }
    });
  });

//Enable Buttons and disable popup on page load
window.onload = enableButtons;