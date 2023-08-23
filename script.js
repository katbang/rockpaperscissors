const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

rock.addEventListener("mousedown", playRock);
paper.addEventListener("mousedown", playPaper);
scissors.addEventListener("mousedown", playScissor);

function hideAll() {
  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");
  player1.classList.remove("rock");
  player2.classList.remove("rock");
  player1.classList.remove("paper");
  player2.classList.remove("paper");
  player1.classList.remove("scissors");
  player2.classList.remove("scissors");
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function opponentRock() {
  player2.classList.remove("shake");
  player2.classList.add("rock");
}

function opponentPaper() {
  player2.classList.remove("shake");
  player2.classList.add("paper");
}

function opponentScissors() {
  player2.classList.remove("shake");
  player2.classList.add("scissors");
}

function playRock() {
  hideAll();
  player1.removeEventListener("animationend", activateScissor);
  player1.removeEventListener("animationend", activateRock);
  player1.removeEventListener("animationend", activatePaper);
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  player1.offsetHeight;
  player2.offsetHeight;
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", activateRock);
}
function activateRock() {
  let move = 2;
  let rndNum = generateRandomNumber();
  console.log(rndNum);
  player1.classList.remove("shake");
  player1.classList.add("rock");
  if (move > rndNum) {
    win.classList.remove("hidden");
  }
  if (move < rndNum) {
    lose.classList.remove("hidden");
  }
  if (move == rndNum) {
    draw.classList.remove("hidden");
  }
  if (rndNum == 2) {
    player2.addEventListener("animationend", opponentRock());
    player2.removeEventListener("animationend", opponentRock());
  }
  if (rndNum == 3) {
    player2.addEventListener("animationend", opponentPaper());
    player2.removeEventListener("animationend", opponentPaper());
  }
  if (rndNum == 1) {
    player2.addEventListener("animationend", opponentScissors());
    player2.removeEventListener("animationend", opponentScissors());
  }
}

function playPaper() {
  hideAll();
  player1.removeEventListener("animationend", activateScissor);
  player1.removeEventListener("animationend", activateRock);
  player1.removeEventListener("animationend", activatePaper);
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  player1.offsetHeight;
  player2.offsetHeight;
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", activatePaper);
}

function activatePaper() {
  let move = 2;
  let rndNum = generateRandomNumber();
  console.log(rndNum);
  player1.classList.remove("shake");
  player1.classList.add("paper");
  if (move > rndNum) {
    win.classList.remove("hidden");
  }
  if (move < rndNum) {
    lose.classList.remove("hidden");
  }
  if (move == rndNum) {
    draw.classList.remove("hidden");
  }
  if (rndNum == 1) {
    player2.addEventListener("animationend", opponentRock());
    player2.removeEventListener("animationend", opponentRock());
  }
  if (rndNum == 2) {
    player2.addEventListener("animationend", opponentPaper());
    player2.removeEventListener("animationend", opponentPaper());
  }
  if (rndNum == 3) {
    player2.addEventListener("animationend", opponentScissors());
    player2.removeEventListener("animationend", opponentScissors());
  }
}
function playScissor() {
  hideAll();
  player1.removeEventListener("animationend", activateScissor);
  player1.removeEventListener("animationend", activateRock);
  player1.removeEventListener("animationend", activatePaper);
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  player1.offsetHeight;
  player2.offsetHeight;
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", activateScissor);
  rock.addEventListener("mousedown", playRock);
  paper.addEventListener("mousedown", playPaper);
  scissors.addEventListener("mousedown", playScissor);
}
function activateScissor() {
  let move = 2;
  let rndNum = generateRandomNumber();
  console.log(rndNum);
  player1.classList.remove("shake");
  player1.classList.add("scissors");
  if (move > rndNum) {
    win.classList.remove("hidden");
  }
  if (move < rndNum) {
    lose.classList.remove("hidden");
  }
  if (move == rndNum) {
    draw.classList.remove("hidden");
  }

  if (rndNum == 3) {
    player2.addEventListener("animationend", opponentRock());
    player2.removeEventListener("animationend", opponentRock());
  }
  if (rndNum == 1) {
    player2.addEventListener("animationend", opponentPaper());
    player2.removeEventListener("animationend", opponentPaper());
  }
  if (rndNum == 2) {
    player2.addEventListener("animationend", opponentScissors());
    player2.removeEventListener("animationend", opponentScissors());
  }
}
