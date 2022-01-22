window.onload = function MazeGame() {
  var walls = document.getElementsByClassName("boundary");
  var message = document.getElementById("status");
  var start_div = document.getElementById("start");
  var end_div = document.getElementById("end");
  var restart = document.getElementsByClassName("example");
  restart[0].innerHTML = "Restart";
  var score = 0;
  function TurnRed() {
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].style.backgroundColor = "red";
    }

    if (score <= 10) {
      score = 0;
    } else {
      score = score - 10;
    }
    message.innerHTML = `You Lost!😞 Click "S" to start again, Score = ${score}`;
  }
  function TurnGreen() {
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].style.backgroundColor = "green";
    }
    score = score + 5;
    message.innerHTML = 'You Won!🎉 Click "S" to start again, Score = ' + score;
  }
  function TurnWhite() {
    console.log("Turn white");
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].style.backgroundColor = "#eeeeee";
    }
    message.innerHTML = 'Begin by moving your mouse over the "S"';
  }
  function RestartScore() {
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].style.backgroundColor = "#eeeeee";
    }
    score = 0;
    message.innerHTML =
      'Begin by moving your mouse over the "S", Score = ' + score;
  }

  function StartAgain() {
    start_div.addEventListener("click", TurnWhite);
  }
  function YouLost() {
    for (i = 0; i < walls.length - 1; i++) {
      walls[i].addEventListener("mouseenter", TurnRed);
    }
  }
  function YouWin() {
    end_div.addEventListener("click", TurnGreen);
  }
  function RestartGame() {
    restart[0].addEventListener("click", RestartScore);
  }

  YouLost();
  StartAgain();
  YouWin();
  RestartGame();
};
