window.onload = function MazeGame() {
  var walls = document.getElementsByClassName("boundary");
  var message = document.getElementById("status");
  var start_div = document.getElementById("start");
  var end_div = document.getElementById("end");
  function TurnRed() {
    for (var i = 0; i < walls.length; i++) {
      walls[i].style.backgroundColor = "red";
    }
    message.innerHTML = "You Lost!😞";
  }
  function TurnGreen() {
    for (var i = 0; i < walls.length; i++) {
      walls[i].style.backgroundColor = "green";
    }
    message.innerHTML = "You Won!🎉";
  }
  function TurnWhite() {
    console.log("Turn white");
    for (var i = 0; i < walls.length; i++) {
      walls[i].style.backgroundColor = "#eeeeee";
      message.innerHTML = 'Begin by moving your mouse over the "S"';
    }
  }
  function StartAgain() {
    start_div.addEventListener("click", TurnWhite);
  }

  function YouLost() {
    for (i = 0; i < walls.length; i++) {
      walls[i].addEventListener("mouseenter", TurnRed);
    }
  }
  function YouWin() {
    end_div.addEventListener("mouseenter", TurnGreen);
  }
  YouLost();
  StartAgain();
  YouWin();
};
