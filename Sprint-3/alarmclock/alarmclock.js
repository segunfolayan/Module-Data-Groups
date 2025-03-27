

function setAlarm() {
  const alarmInput = document.getElementById("alarmSet");
  const timeRemainingDisplay = document.getElementById("timeRemaining"); 

  if (!alarmInput || !timeRemainingDisplay) {
    console.error("Input or display element not found.");
    return;
  }

  const alarmTimeInSeconds = parseInt(alarmInput.value);

  if (isNaN(alarmTimeInSeconds) || alarmTimeInSeconds < 0) {
    alert("Please enter a valid positive number for the alarm time (in minutes).");
    return;
  }

  const now = new Date();
  const alarmDate = new Date(now.getTime() + alarmTimeInSeconds*1000);


  let intervalId; 



    function updateDisplay() {
      const currentTime = new Date();
      const timeLeft = Math.max(0, Math.floor((alarmDate - currentTime) / 1000));


    if (timeLeft <= 0) {
      clearInterval(intervalId); // Stop the interval
      timeRemainingDisplay.textContent = "Time Remaining: 00:00";
      playAlarm();
      return;
    }



    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

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
