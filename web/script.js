const messages = [
    "Hi,",
    "I am your guide,",
    "For this treasure hunt.",
    "First of all,",
    "I wish you...",
    "many more happy returns of the day Roshini!",
    "In this treasure hunt, I will guide you.",
    "Be Ready ",
    "Let's start",
    "Click the Button"
  ];
  
  let index = 0;
  const messageBox = document.getElementById("message");
  const startButton = document.getElementById("startButton");
  
  function showNextMessage() {
    if (index >= messages.length) {
      startButton.classList.remove("hidden");
      return;
    }
  
    messageBox.textContent = messages[index];
    messageBox.style.opacity = 1;
  
    setTimeout(() => {
      messageBox.style.opacity = 0;
      index++;
      setTimeout(showNextMessage, 1000);
    }, 1500);
  }
  
  setTimeout(showNextMessage, 2000);
  

  // 🌟 Star Background Setup
const starsBg = document.getElementById("stars-background");

// Create blinking stars
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${Math.random() * 3 + 1}s`;
  starsBg.appendChild(star);
}

// Create shooting stars every 3–6 seconds
function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");
  star.style.top = `${Math.random() * 80 + 10}%`;
  star.style.left = `${Math.random() * 100}%`;
  starsBg.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1000);
}

setInterval(createShootingStar, Math.random() * 3000 + 3000); // every 3–6s
