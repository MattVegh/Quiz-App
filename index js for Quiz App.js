'use strict';

let questionNum = 0;
let score = 0;


//starts the quiz
function startQuiz() {
  $('.startButton').on('click', event => {
  $('.quizStartBox').remove();
  $('.quizBox').css('visibility', 'visible');
  $('.questionNumber').text(1);
  generateQuestion();
  });
}

//generates next question
function generateQuestion() {
  let quizBox = `
  <form role="quizForm">
    <fieldset>
      <p>${QUESTIONS[questionNum].question}</p>
      <label class="answerOptions">
        <input name="answer js-answer" type="radio" value="${QUESTIONS[questionNum].answers[0]}"><span>${QUESTIONS[questionNum].answers[0]}</span>
      </label>
      <label class="answerOptions">
        <input name="answer js-answer" type="radio" value="${QUESTIONS[questionNum].answers[1]}"><span>${QUESTIONS[questionNum].answers[1]}</span>
      </label>
      <label class="answerOptions">
        <input name="answer js-answer" type="radio" value="${QUESTIONS[questionNum].answers[2]}"><span>${QUESTIONS[questionNum].answers[2]}<span>
      </label>
      <label class="answerOptions">
        <input name="answer js-answer" type="radio" value="${QUESTIONS[questionNum].answers[3]}"><span>${QUESTIONS[questionNum].answers[3]}<span>
      </label>
      <button type="submit" class="js-button-submit submit">Submit</button>
    </fieldset>
  </form>`
  $('.quizBox').html(quizBox);
}

//results when user is correct
function correctAnswerDisplay() {
  const correctDisplay = `
  <form role="quizForm">
    <fieldset>
      <h2>Correct!</h2>
      
      <p>${QUESTIONS[questionNum].ifCorrectAnswerInfo}</p>
      <button type="submit" class="js-button-next next">Next Question</button>
    </fieldset>
  </form>`
  $('.quizBox').html(correctDisplay);
  changeQuestionNumber();
  updateScore();
  getNextQuestion();
  
}

//results when user is incorrect
function incorrectAnswerDisplay() {
  const incorrectDisplay = `
  <form role="quizForm">
    <fieldset>
      <p>Wrong!</p>
      <p>Correct answer is: ${QUESTIONS[questionNum].correctAnswer}</p>
      <button type="submit" class="js-button-next next">Next Question</button>
    </fieldset>
  </form>`
  $('.quizBox').html(incorrectDisplay);
  getNextQuestion();
  changeQuestionNumber();
}



function getNextQuestion() {
  $('.quizBox').on('click', '.js-button-next', event => {
    event.preventDefault();
    if (questionNum < QUESTIONS.length) {
      generateQuestion();
      
    } else {
      endResults();
      $('.questionNumber').text(questionNum);
    }
  });
}

//user submits answer
function submitAnswer() {
  $('.quizBox').on('click', '.js-button-submit', event => {
    event.preventDefault();
    const userChoice = $('input:checked').val();
    let correctAnswer = `${QUESTIONS[questionNum].correctAnswer}`;
    if (userChoice === correctAnswer) {
      correctAnswerDisplay();
    } else {
      incorrectAnswerDisplay();
    }
    
  });
}

//restarts the quiz after user finishes
function restartQuiz() {
  $('.restart').on('click', event => {
    event.preventDefault();
    questionNum = 1;
    score = 0;
    generateQuestion();
  });
}

//udpate user's score
function updateScore() {
  score++;
  $('.score').text(score);
}

function changeQuestionNumber() {
    questionNum ++;
    $('.questionNumber').text(questionNum+1);
}

//end results
function endResults() {
  const quizResults = `
    <form role="quizForm">
      <fieldset>
        <p>You scored ${score} out of 10</p>
        <button type="submit" class="restart">Restart Quiz</button>
      </fieldset>
    </form>`
    $('.quizBox').html(quizResults);
}



//callback function
function loadQuizPage() {
  startQuiz();
  generateQuestion();
  getNextQuestion();
  submitAnswer();
  
}


$(loadQuizPage);