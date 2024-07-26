function showAlert(message) {
  document.getElementById("alert-message").textContent = message;
  document.getElementById("custom-alert").classList.remove("hidden");
  document.getElementById("threat-sound").play();
}

function closeAlert() {
  document.getElementById("custom-alert").classList.add("hidden");
  document.getElementById("threat-sound").pause();
  document.getElementById("threat-sound").currentTime = 0;
}
