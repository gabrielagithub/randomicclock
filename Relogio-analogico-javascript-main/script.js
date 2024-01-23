let randomHour, randomMin;

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function getRandomTime() {
  randomHour = Math.floor(Math.random() * 12);
  randomMin = Math.floor(Math.random() * 60);

  const getHourRot = (360 / 12) * randomHour;
  const getMinRot = (360 / 60) * randomMin;

  hour.style.transform = `rotate(${getHourRot}deg)`;
  min.style.transform = `rotate(${getMinRot}deg)`;

  updateTimeInput();
}

function rotateSeconds() {
  const date = new Date();
  const getSecRot = (360 / 60) * date.getSeconds();
  sec.style.transform = `rotate(${getSecRot}deg)`;
}

function updateTimeInput() {
  const timeInput = document.querySelector("#time-input");
  timeInput.value = `${randomHour.toString().padStart(2, '0')}:${randomMin.toString().padStart(2, '0')}`;
}

getRandomTime();
setInterval(rotateSeconds, 1000);