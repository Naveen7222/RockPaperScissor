let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const uScore = document.getElementById("user-score");
const cScore = document.getElementById("computer-score");

const draw = () => {
  console.log("Draw");
  msg.innerText = `Game Draw !! try again`;
  msg.style.backgroundColor = "yellow"

};
const getCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randmidx = Math.floor(Math.random() * 3);
  console.log("comp select = " + options[randmidx]);
  return options[randmidx];
};
const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    console.log("You win");
    uScore.innerText = userScore;
    msg.innerText = `You win !! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#1de44c"
  } else {
    compScore++;
    cScore.innerText = compScore;
    console.log("You Lose");
    msg.innerText = `You Lose !!  ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red"

  }
};
const playGame = (userChoice) => {
  const compChoice = getCompChoice();
  let userWin = true;
  if (userChoice === compChoice) {
     draw();
     return;
  } else {
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
  }
  showWinner(userWin,userChoice,compChoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("you selected - " + userChoice);
    playGame(userChoice);
  });
});
