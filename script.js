// Make the variables

const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")

// Questions for the quiz
let currentQuestion = 0;
let score = 0;

let questions = [{
    question: "What is my dog's name?", answers: [{ option: "Bella", answer: true }, { option: "Ziggy", answer: false },]
},
{
    question: "My favorite crayon is the ___ one.",
    answers: [
        { option: "Yellow", answer: false },
        { option: "Purple", answer: true },
    ]
},
{
    question: "The capital of North Carolina is ...",
    answers: [
        { option: "Raleigh", answer: true },
        { option: "Asheville", answer: false },
        { option: "Charlotte", answer: false },
    ]
}
]

// Add events buttons

restartBtn.addEventListener("click", restart);
// prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
// submitBtn.addEventListener("click", submit);

// Start the quiz
function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    };

    prevBtn.classList.add("hide");
}

beginQuiz();

// restart button

function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

//

function next() {
    currentQuestion++;
    if (currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer);
    }
}