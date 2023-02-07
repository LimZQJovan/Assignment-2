
// // $(document).ready(function() {
// //     // Math problems
// //     var problems = [
// //       {question: "What is 2 + 2?", answer: "4"},
// //       {question: "What is 3 x 4?", answer: "12"},
// //       {question: "What is 8 / 2?", answer: "4"},
// //       {question: "What is 10 - 5?", answer: "5"}
// //     ];
    
// //     // Keep track of current problem
// //     var currentProblem = 0;
    
// //     // Keep track of the score
// //     var score = 0;
    
// //     // Show the first problem
// //     $("#question").text(problems[currentProblem].question);
    
// //     // Update the score
// //     $("#score").text("Score: " + score);
    
// //     // When the form is submitted
// //     $("form").submit(function(event) {
// //       event.preventDefault();
      
// //       // Get the answer
// //       var answer = $("#answer").val();
      
// //       // Check if the answer is correct
// //       if (answer === problems[currentProblem].answer) {
// //         // If correct, increase the score
// //         score++;
// //         $("#feedback").text("Correct!");
// //         currentProblem++;
// //         $("#score").text("Score: " + score);
// //         if (currentProblem === problems.length) {
// //             $("#feedback").text("You've solved all the problems! Well done!");
// //             } else {
// //             $("#question").text(problems[currentProblem].question);
// //             $("#answer").val("");
// //             $("#feedback").text("");
// //             }
// //       } else {
// //         $("#feedback").text("Incorrect. Try again.");
// //     }
// // });
// // });
// $(document).ready(function() {
//     // Math problems
//     var problems = [];
//     var num1, num2, operator, answer, problem;
    
//     // Generate 5 random math problems
//     for (var i = 0; i < 5; i++) {
//     num1 = Math.floor(Math.random() * 10) + 1;
//     num2 = Math.floor(Math.random() * 10) + 1;
//     operator = Math.floor(Math.random() * 4);
//     if (operator === 0) {
//         answer = num1 + num2;
//         problem = "What is " + num1 + " + " + num2 + "?";
//       } else if (operator === 1) {
//         answer = num1 - num2;
//         problem = "What is " + num1 + " - " + num2 + "?";
//       } else if (operator === 2) {
//         answer = num1 * num2;
//         problem = "What is " + num1 + " x " + num2 + "?";
//       } else {
//         answer = num1 / num2;
//         problem = "What is " + num1 + " / " + num2 + "?";
//       }
      
//       problems.push({question: problem, answer: answer.toString()});
//     }

//     // Keep track of current problem
//     var currentProblem = 0;
    
//     // Keep track of the score
//     var score = 0;
    
//     // Show the first problem
//     $("#question").text(problems[currentProblem].question);
    
//     // Update the score
//     $("#score").text("Score: " + score);
    
//     // When the form is submitted
//     $("form").submit(function(event) {
//     event.preventDefault();
//     // Get the answer
// var answer = $("#answer").val();

// // Check if the answer is correct
// if (answer === problems[currentProblem].answer) {
//   // If correct, increase the score
//   score++;
//   $("#feedback").text("Correct!");
//   currentProblem++;
//   $("#score").text("Score: " + score);
//   if (currentProblem === problems.length) {
//       $("#feedback").text("You've solved all the problems! Well done!");
//       } else {
//       $("#question").text(problems[currentProblem].question);
//       $("#answer").val("");
//       $("#feedback").text("");
//       }
// } else {
//   $("#feedback").text("Incorrect. Try again.");
// }
// });
// });

