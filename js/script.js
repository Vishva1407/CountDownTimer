const daysQuery = document.querySelector("#days");
const hoursQuery = document.querySelector("#hours");
const minutesQuery = document.querySelector("#minutes");
const secondsQuery = document.querySelector("#seconds");

function updateTimer()
{
const currentYear = new Date().getFullYear();
const newYear =new Date(`January 1 ${currentYear+1} 00:00:00:00`);
const diff = newYear - new Date();
const days = Math.floor(diff/1000/60/60/24);
const hours = Math.floor((diff/1000/60/60)%24);
const minutes = Math.floor((diff/1000/60)%60);
const seconds = Math.floor((diff/1000)%60);
daysQuery.innerHTML = days;
hoursQuery.innerHTML = hours;
minutesQuery.innerHTML = minutes;
secondsQuery.innerHTML = seconds;
}

setInterval(updateTimer,1000);