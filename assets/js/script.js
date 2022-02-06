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
// 3.3 we'll probably need a constiable/array/object to store questions and the correct answer
// 4.  if the timer hits 0 OR the user gets through all the questions, we want to go to the highscore page
// 4.1 an input field where the user can type in their highscore
// 4.2 store the highscores in local storage (JSON.stringify)
// 4.3 retrieve the highscores from the local storage for that user
// 4.4 display the user;s highscores
// 5.  subtract time from the timer is the answer is wrong
// 5.1 timer should be displayed while the questions/answers change
// 5.2 how to create a countdown in javascript - what will we need

(function(){
  // Functions
  function buildQuiz(){
    // constiable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // constiable to store the list of possible answers
        const answers = [];

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
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // constiables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Are you ready to start the quiz? Press the 'Next' button to begin!",
      correctAnswer: ""
    },
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
      },
      correctAnswer: "d"
    },
    {
      question: "What does CSS stand for?",
      answers: {
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets"
      },
      correctAnswer: "b"
    },
    {
      question: "Where in an HTML document is the correct place to refer to an external style sheet?",
      answers: {
        a: "In the 'body' section",
        b: "At the end of the document",
        c: "In the 'head' section"
      },
      correctAnswer: "c"
    },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
}
)();

// Build Timer
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  
  return {
    total,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(endtime);
    clock.innerHTML = '' + t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  },1000);
}

const deadline = new Date(Date.parse(new Date()) + 60 * 1000);
initializeClock(id='clockdiv', deadline);

// Event listener to tie clock and begin button together
function startClock() {
nextButton.addEventListener('click', initializeClock)};

function colorchange(seconds)
{
 if(seconds.value <= "57")
 {
    seconds.style.color="red";
 }};