var h1 = document.querySelector("h1");

var startButton = document.querySelector(".start");

var resetButton = document.querySelector(".reset");

var img1 = document.querySelector(".img1");

var img2 = document.querySelector(".img2");

var alert = document.querySelector(".alert");


startButton.addEventListener("click", clickHandler)
resetButton.addEventListener("click", resetHandler)
startButton.addEventListener("click", alertHandler)

function clickHandler (){
  var random1 = Math.random() * 6;
  var randomNumber1 ="images/dice" +  Math.floor(random1 + 1) + ".png";

  var random2 = Math.random() * 6;
  var randomNumber2 ="images/dice" +  Math.floor(random2 + 1) + ".png";

  img1.setAttribute("src", randomNumber1);
  img2.setAttribute("src", randomNumber2);

  checkWinner();

  function checkWinner(){
    if (randomNumber1 === randomNumber2) {
      h1.textContent = "Draw"
      h1.style.color = "#0099cc";
    }
    else if (random1 > random2) {
      h1.textContent = "🚩 Player 1 wins "
      h1.style.color = "#e84a5f";
    }
    else if (random2 > random1) {
      h1.textContent = "Player 2 wins 🚩"
      h1.style.color = "#e4f9f5";
    }
  }

  startButton.removeEventListener("click", clickHandler)
}

function alertHandler (){
  alert.textContent = "Please click on reset to play again"
  document.querySelector(".border").style.visibility = "visible";
}

function resetHandler () {
  h1.textContent = "Start Game"
  h1.style.color = "#00adb5";

  img1.setAttribute("src", "images/dice6.png")
  img2.setAttribute("src", "images/dice6.png")

  startButton.addEventListener("click", clickHandler)
  document.querySelector(".border").style.visibility = "hidden";
}
