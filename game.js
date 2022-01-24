window.onload = function MazeGame() {
  var walls = document.getElementsByClassName("boundary");
  var message = document.getElementById("status");
  var start_div = document.getElementById("start");
  var end_div = document.getElementById("end");
  var restart = document.getElementsByClassName("example");
  var out_of_bounds = document.getElementById("game");
  console.log(out_of_bounds);
  restart[0].innerHTML = "Restart Score";
  var score = 0;
  function LostFunction() {
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].style.backgroundColor = "red";
    }

    if (score <= 10) {
      score = 0;
    } else {
      score = score - 10;
    }

    message.innerHTML = `You Lost!😞 Move your mouse over the "S" to continue, Score = ${score}`;
    end_div.removeEventListener("mouseenter", WinFunction, { once: true });
    for (i = 0; i < walls.length - 1; i++) {
      walls[i].removeEventListener("mouseenter", LostFunction, { once: true });
    }
    Start();
  }
  function WinFunction() {
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].style.backgroundColor = "green";
    }
    score = score + 5;
    message.innerHTML =
      'You Won!🎉 Move your mouse over the "S" to continue, Score = ' + score;
    end_div.removeEventListener("mouseenter", WinFunction, { once: true });
    for (i = 0; i < walls.length - 1; i++) {
      walls[i].removeEventListener("mouseenter", LostFunction, { once: true });
    }
    Start();
  }
  function TryAgainFunction() {
    console.log("Turn white");
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].style.backgroundColor = "#eeeeee";
    }
    message.innerHTML = "Move the mouse carefully between the walls.";
    YouWin();
    YouLost();
  }

  function RestartScoreFunction() {
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].style.backgroundColor = "#eeeeee";
    }
    score = 0;
    message.innerHTML =
      'Begin by moving your mouse over the "S", Score = ' + score;
    end_div.removeEventListener("mouseenter", WinFunction, { once: true });
    for (i = 0; i < walls.length - 1; i++) {
      walls[i].removeEventListener("mouseenter", LostFunction, { once: true });
    }
    Start();
  }
  function StopFunction() {
    end_div.removeEventListener("mouseenter", WinFunction, { once: true });
    for (i = 0; i < walls.length - 1; i++) {
      walls[i].removeEventListener("mouseenter", LostFunction, { once: true });
    }
    Start();
  }
  function Start() {
    start_div.addEventListener("mouseenter", TryAgainFunction, { once: true });
  }
  function YouLost() {
    for (i = 0; i < walls.length - 1; i++) {
      walls[i].addEventListener("mouseenter", LostFunction, { once: true });
    }
  }
  function YouWin() {
    end_div.addEventListener("mouseenter", WinFunction, { once: true });
  }
  function RestartGame() {
    restart[0].addEventListener("click", RestartScoreFunction);
  }
  function Stop() {
    out_of_bounds.addEventListener("mouseleave", StopFunction);
  }
  Start();
  RestartGame();
  Stop();
};
