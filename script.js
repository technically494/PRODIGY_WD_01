let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

document.getElementById("start").onclick = () => {
  if (!isRunning) {
    interval = setInterval(stopwatch, 1000);
    isRunning = true;
  }
};

document.getElementById("pause").onclick = () => {
  clearInterval(interval);
  isRunning = false;
};

document.getElementById("reset").onclick = () => {
  clearInterval(interval);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  isRunning = false;
};

document.getElementById("lap").onclick = () => {
  if (isRunning) {
    let lapTime = display.innerText;
    let li = document.createElement("li");
    li.innerText = lapTime;
    document.getElementById("laps").appendChild(li);
  }
};
