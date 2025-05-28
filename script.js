function updateClock() {
  const now = new Date().toLocaleTimeString("de-DE", { timeZone: "Europe/Berlin" });
  document.getElementById("clock").textContent = now;
  document.title = now;
}
setInterval(updateClock, 1000);
updateClock();
