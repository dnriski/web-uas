//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions dan Options array

const quizArray = [
  {
    id: "0",
    question: "Apa itu HTML dan apa fungsinya dalam pengembangan web?",
    options: [
      "Sebuah bahasa pemrograman untuk membuat aplikasi desktop",
      "Sebuah bahasa pemrograman untuk membuat aplikasi mobile",
      "Sebuah bahasa markup untuk membuat struktur halaman web",
      "Sebuah bahasa pemrograman untuk membuat server web",
    ],
    correct: "Sebuah bahasa markup untuk membuat struktur halaman web",
  },
  {
    id: "1",
    question: "Yang mana yang bukan attribuete dari HTML?",
    options: ["alt", "target", "fontSize", "id"],
    correct: "fontSize",
  },
  {
    id: "2",
    question: "Apa fungsi dari tag &lt;body&gt; dalam HTML?",
    options: [
      "Menyimpan informasi meta tentang dokumen",
      "Menyimpan konten yang akan ditampilkan di halaman web",
      "Menyimpan referensi ke file eksternal",
      "Menyimpan pengaturan halaman",
    ],
    correct: "Menyimpan konten yang akan ditampilkan di halaman web",
  },
  {
    id: "3",
    question: "Tag HTML untuk membuat paragraf adalah?",
    options: ["&lt;body&gt", "&lt;p&gt", "&lt;div&gt", "&lt;section&gt"],
    correct: "<p>",
  },
  {
    id: "4",
    question: "Tag HTML yang digunakan untuk menyisipkan gambar adalah?",
    options: ["&lt;img&gt", "&lt;image&gt", "&lt;picture&gt", "&lt;src&gt"],
    correct: "<img>",
  },
  {
    id: "5",
    question: "Apa fungsi dari atribut `alt` dalam tag &lt;image&gt",
    options: [
      "Untuk menentukan ukuran gambar",
      "Untuk menambahkan deskripsi gambar",
      "Untuk menentukan sumber gambar",
      "Untuk menambahkan teks alternatif jika gambar tidak dapat ditampilkan",
    ],
    correct:
      "Untuk menambahkan teks alternatif jika gambar tidak dapat ditampilkan",
  },

  // Menambah pertnayaan disini....
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer - "Set Waktu"
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
