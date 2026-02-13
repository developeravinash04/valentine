// Surprise button
const btn = document.getElementById("surpriseBtn");
const surpriseText = document.getElementById("surpriseText");

btn.addEventListener("click", () => {
  surpriseText.classList.remove("hidden");
  btn.innerText = "Aww 💖";
});

// Heart generator
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 250);