
const changeNumber = document.getElementById('seconds');
const changeMinute = document.getElementById('minutes');
const changeHour = document.getElementById('hours');
const changeDay = document.getElementById('day');
const changeMonth = document.getElementById('month');
const changeDate = document.getElementById('date');
const changeYear = document.getElementById('year');
let seconds = 0;
let minutes = 0;
let hours = 12;
let isPM = true;

// Array for day and month names
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Update the clock every second
setInterval(() => {
  // Increment seconds
  seconds++;

  // Update seconds display
  changeNumber.textContent = seconds < 10 ? "0" + seconds : seconds;

  // Handle minute rollover
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    changeMinute.textContent = minutes < 10 ? "0" + minutes : minutes;
  }

  // Handle hour rollover
  if (minutes === 60) {
    minutes = 0;
    hours++;
    changeHour.textContent = hours < 10 ? "0" + hours : hours;

    // Handle AM/PM toggle
    if (hours === 12) {
      isPM = !isPM;
    } else if (hours === 13) {
      hours = 1; // Reset hours to 1 after 12
    }
  }

  // Update the date and day dynamically
  const now = new Date();
  changeDay.textContent = days[now.getDay()];
  changeMonth.textContent = months[now.getMonth()];
  changeDate.textContent = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  changeYear.textContent = now.getFullYear();
}, 1000);
