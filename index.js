const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 3600; // Time in seconds (1 hour = 3600 seconds)

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 3600; // Reset to 1 hour
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 3600; // Reset to 1 hour
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);


document.getElementById('start').addEventListener('click', function() {
  const music = document.getElementById('background-music');
  music.play();
});

document.getElementById('stop').addEventListener('click', function() {
  const music = document.getElementById('background-music');
  music.pause();
});

document.getElementById('reset').addEventListener('click', function() {
  const music = document.getElementById('background-music');
  music.pause();
  music.currentTime = 0; // Reset the music to the beginning
});
