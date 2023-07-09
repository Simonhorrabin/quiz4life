const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");
const finalScore = document.getElementById("final-score");

let currentQuestion = 0;
let score = 0;

let questions = [
  {
    question: "What is my dog's name?",
    answers: [{ option: "Bella", answer: true }, { option: "Ziggy", answer: false }]
  },
  {
    question: "My favorite crayon is the ___ one.",
    answers: [
      { option: "Yellow", answer: false },
      { option: "Purple", answer: true }
    ]
  },
  {
    question: "The capital of North Carolina is ...",
    answers: [
      { option: "Raleigh", answer: true },
      { option: "Asheville", answer: false },
      { option: "Charlotte", answer: false }
    ]
  }
];

restartBtn.addEventListener("click", restart);
nextBtn.addEventListener("click", next);

beginQuiz();

function beginQuiz() {
  currentQuestion = 0;
  totalScore.innerHTML = questions.length;
  userScore.innerHTML = score;
  showQuestion();
}

function showQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionText.innerHTML = currentQuestionData.question;
  trueBtn.innerHTML = currentQuestionData.answers[0].option;
  trueBtn.onclick = () => {
    handleAnswer(currentQuestionData.answers[0].answer);
  };
  falseBtn.innerHTML = currentQuestionData.answers[1].option;
  falseBtn.onclick = () => {
    handleAnswer(currentQuestionData.answers[1].answer);
  };
}

function handleAnswer(answer) {
  if (answer) {
    score++;
  }
  userScore.innerHTML = score;
  next();
}

function next() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  questionText.innerHTML = "Quiz Finished!";
  finalScore.innerHTML = `Your Score: ${score} / ${questions.length}`;
  finalScore.classList.remove("hide");
  trueBtn.classList.add("hide");
  falseBtn.classList.add("hide");
  prevBtn.classList.add("hide");
  nextBtn.classList.add("hide");
}

function restart() {
  currentQuestion = 0;
  score = 0;
  userScore.innerHTML = score;
  finalScore.classList.add("hide");
  trueBtn.classList.remove("hide");
  falseBtn.classList.remove("hide");
  prevBtn.classList.remove("hide");
  nextBtn.classList.remove("hide");
  showQuestion();
}
