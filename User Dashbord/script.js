const localTime = document.getElementById("local-time");

setInterval(() => {
  const now = new Date().toLocaleString();

  localTime.textContent = now;
}, 1);
