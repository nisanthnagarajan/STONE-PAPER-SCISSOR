const Rock = document.getElementById("option1");
const Paper = document.getElementById("option2");
const Scissors = document.getElementById("option3");
const choise = ["Rock", "Paper", "Scissors"];
const user = document.getElementById("user");
const compt = document.getElementById("compt");
const result = document.getElementById("result");
let computerscore = 0;
let userscore = 0;
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const main = document.getElementById("main");

Rock.addEventListener("click", () => {
  game("Rock");
});
Paper.addEventListener("click", () => {
  game("Paper");
});
Scissors.addEventListener("click", () => {
  game("Scissors");
});
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
function game(value) {
  user.innerHTML = `Your's choice is :${value}`;
  console.log(value);
  const computer = getRandomElement(choise);
  compt.innerHTML = `Computer's choice is :${computer}`;

  if (value === computer) {
    result.innerHTML = `It's a Tie`;
  } else if (
    (value === "Rock" && computer === "Paper") ||
    (value === "Paper" && computer === "Scissors") ||
    (value === "Scissors" && computer === "Rock")
  ) {
    result.innerHTML = `Computer wins`;
    computerscore++;
    result2.innerHTML = `Computer Score is :${computerscore}`;
    main.classList.add("red-bgc");
  } else {
    result.innerHTML = `You win`;
    userscore++;
    result1.innerHTML = `your Score is :${userscore}`;
    main.classList.add("green-bgc");
  }
  setTimeout(() => {
    main.classList.remove("red-bgc", "green-bgc");
  }, 400);
}
