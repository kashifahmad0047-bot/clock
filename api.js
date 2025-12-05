function updateClock() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = second * 6;
  const minuteDeg = minute * 6 + second * 0.1;
  const hourDeg = ((hour % 12) / 12) * 360 + (minute / 60) * 30;

  document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
