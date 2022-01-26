// Pseudo code for the coding quiz challenge
// 1.  build a home screen with a start button and view high scores
// 2.  create and event listener for the start button
// 2.1 onclick of the start button, 2 things happen
// 1.  the timer starts and will be displayed
// 2.  the first question is displayed with the answer choices
// 3.  create an event listener for the answer choices
// 3.1 onclick of an answer choice
// 1.  indicate somehow that the answer is right or wrong
// 2.  THEN go to the next question
// 3.2 if we are creating these elements with the DOM in javascript, create a reusable function for creating the elements for the question and answers
// 3.3 we'll probably need a variable/array/object to store questions and the correct answer
// 4.  if the timer hits 0 OR the user gets through all the questions, we want to go to the highscore page
// 4.1 an input field where the user can type in their highscore
// 4.2 store the highscores in local storage (JSON.stringify)
// 4.3 retrieve the highscores from the local storage for that user
// 4.4 display the user;s highscores
// 5.  subtract time from the timer is the answer is wrong
// 5.1 timer should be displayed while the questions/answers change
// 5.2 how to create a countdown in javascript - what will we need

var prevButton = document.getElementById('previous');
var nextButton = document.getElementById('next');
var submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


  function buildQuiz(){
    // variable to store the HTML output
    var output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        var answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
