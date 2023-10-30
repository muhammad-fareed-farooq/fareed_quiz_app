var questions = [
  {
    question: " Q1...  HTML stands for",
    option1: "Hyper Text markup language",
    option2: "Hyper Link markup language",
    option3: "Hyper Text makeup language",
    ans: "Hyper Text markup language",
  },
  {
    question: " Q2... CSS stands for",
    option1: "Cascading Style sheet",
    option2: "Cascading Styling sheet",
    option3: "Cascading super sheet",
    ans: "Cascading Style sheet",
  },
  {
    question: " Q3...  In how many ways can CSS be written in?",
    option1: "1",
    option2: "2",
    option3: "3",
    ans: "3",
  },
  {
    question: " Q4...  Which tag gives your the largest heading in html",
    option1: "<h6>",
    option2: "<h2>",
    option3: "<h1>",
    ans: "<h1>",
  },
  {
    question: " Q5... how many data types in js?",
    option1: "9",
    option2: "7",
    option3: "8",
    ans: "8",
  },
  {
    question: " Q6... how many days in febuary",
    option1: "31",
    option2: "28",
    option3: "29",
    ans: "28",
  },
  {
    question: " Q7... Which tag gives your the Smallest heading in html",
    option1: "<h6>",
    option2: "<h2>",
    option3: "<h1>",
    ans: "<h6>",
  },
];

var para = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var btn = document.getElementById("btn");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 1;
var sec = 59;

setInterval(function () {
  timer.innerHTML = `${min}:${sec}`;
  sec--;
  if (sec < 0) {
    min--;
    sec = 59;
    if (min < 0) {
      sec = 59;
      min = 1;
      nextQuestion();
    }
  }
}, 100);

function nextQuestion() {
  var getOptions = document.getElementsByName("options");
  for (var i = 0; i < getOptions.length; i++) {
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value;
      var selectedques = questions[index - 1]["question"];
      var selectedAns = questions[index - 1][`option${selectedValue}`];
      var correctAns = questions[index - 1]["ans"];
      if (selectedAns == correctAns) {
        score++;
      }
    }
    getOptions[i].checked = false
  }
  min = 1;
  sec = 59;
  btn.disabled = true;

  if (index > questions.length - 1) {
    if (score >= 60) {
      Swal.fire(
        "Good job!",
        `Your percentage is ${((score / questions.length) * 100).toFixed(2)}`,
        "success"
      );
    }else if (score <= 60) {
      Swal.fire({
        icon: 'error',
        title: 'Fail...',
        text: `Your percentage is ${((score / questions.length) * 100).toFixed(2)}`,
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }
   else {
    para.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
  }
}

function clicked() {
  btn.disabled = false;
}
