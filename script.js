function updateClock() {
  // Get current local time
  const now = new Date();

  // Format time hh:mm:ss
  const hours = now.getHours().toString().padStart(2,'0');
  const minutes = now.getMinutes().toString().padStart(2,'0');
  const seconds = now.getSeconds().toString().padStart(2,'0');
  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;

  // Show user timezone
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  document.getElementById("timezone").textContent = `Time Zone: ${tz}`;

  // Change background based on time
  if(hours >= 6 && hours < 18){
    // Day
    document.body.style.background = "linear-gradient(to bottom, #87CEEB, #FFD700)";
  } else {
    // Night
    document.body.style.background = "linear-gradient(to bottom, #0D1B2A, #1B263B)";
  }
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
