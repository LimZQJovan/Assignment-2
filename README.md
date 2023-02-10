# Assignment-2
# One or two paragraphs providing an overview of your project. Tell us about your project.
The website we designed is about math quiz for kids. There are 2 modes, practice and quiz mode. Quiz mode has limited time and have 15 different type of question with different operator. Once the user has completed the quiz, it will be updated to the leaderboard. Practice on the otherhand has no time limit and have 50 set of question with only 1 type of operator. There are Addition, Substraction, Mulitplication, Division.

## Design Process

# In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure: As a user type, I want to perform an action, so that I can achieve a goal.

The intended audience for this website is for kids who wants to practice math and have a little challenge at the same time. This website aims to let kids practice how fast they can do mental sum in a 30 sec.

We started off by designing the home page, we wanted to make the homepage simplistic and yet attractive at the same time. There are 3 choices that leads to the quiz mode, practice mode and leaderboard. Every page will also have background music which some page are allowed to mute/pause the audio.
The practice game is based on addition, subtraction, multiplication and division. It has a layout with a header, a navigation menu, and a main game section. The game section includes a question, 4 choices, and a score tracker.
The script section at the bottom of the code sets up the game logic. It selects various elements on the page (e.g. the question, the choices, the progress bar, etc.) and initializes some variables (e.g. the current question, the score, the question counter, etc.).
In the script, the volume of two audio elements, "correct" and "wrong", are set to 0.4. These audio elements will play when the user selects the correct or incorrect answer respectively. The choices when is correct or wrong will turn green and red respectively.
The script also starts a loader animation. The details of how the game works are described in the add.js file.

The quiz game is based different set of questions with different operator.It has a layout with a header, a navigation menu, and a main game section. The game section includes a question, 4 choices, and a score tracker.
The script section at the bottom of the code sets up the game logic. It selects various elements on the page (e.g. the question, the choices, the progress bar, etc.) and initializes some variables (e.g. the current question, the score, the question counter, etc.).
In the script, the volume of two audio elements, "correct" and "wrong", are set to 0.4. These audio elements will play when the user selects the correct or incorrect answer respectively. The choices when is correct or wrong will turn green and red respectively.
The script also starts a loader animation. The details of how the game works are described in the add.js file.
When the user finish the quiz, the user will be redirected to an end page which shows them their final score and will allow them to save their name for the leaderboard.

The leaderboard page shows the highest scores scored by various people and their name which displayed on the leaderboard.The high scores are stored and displayed on the page.
The high scores are then displayed in the unordered list by setting the innerHTML property of the highScoresList element to the result of mapping over the high scores and returning a string of list item elements for each score.

### Existing Features
## 1.
    The webpage have a loading animation before loading into the page.
## 2.
    Each page will be included with a background music, with some page having the option to pause the music at the bottom of the page.
## 3.
    Some pages also have the hamburger option to choose which page you want to go to.
## 4.
    In both the quiz mode and practice mode, when the user is correct or wrong, it will display green and red, and will the correct and wrong audio played.

# You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.
We didn't the test whether the API was working as I couldn't save the scores and the name to the API

### Media
- The wallpaper used in this project were obtained from google.






