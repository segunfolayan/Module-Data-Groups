

function setAlarm() {
  const alarmInput = document.getElementById("alarmSet");
  const timeRemainingDisplay = document.getElementById("timeRemaining"); // Assuming you have this element in your HTML

  if (!alarmInput || !timeRemainingDisplay) {
    console.error("Input or display element not found.");
    return;
  }

  const alarmTimeInMinutes = parseInt(alarmInput.value);

  if (isNaN(alarmTimeInMinutes) || alarmTimeInMinutes < 0) {
    alert("Please enter a valid positive number for the alarm time (in minutes).");
    return;
  }

  const now = new Date();
  const alarmDate = new Date(now.getTime() + alarmTimeInMinutes * 60000); // Convert minutes to milliseconds

  let intervalId; // Store the interval ID for clearing it later

  function updateDisplay() {
    const currentTime = new Date();
    const timeLeft = alarmDate - currentTime;

    if (timeLeft <= 0) {
      clearInterval(intervalId); // Stop the interval
      timeRemainingDisplay.textContent = "Time Remaining: 00:00";
      playAlarm();
      return;
    }

    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);

    timeRemainingDisplay.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  updateDisplay(); // Initial display update
  intervalId = setInterval(updateDisplay, 1000); // Update every second
}
 

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
