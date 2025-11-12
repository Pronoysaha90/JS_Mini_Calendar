const date = document.querySelector(".date");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const today = new Date();

console.log(today);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];



date.innerHTML =(today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = days[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();