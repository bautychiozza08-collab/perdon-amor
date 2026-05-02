const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.scrollIntoView({ behavior: "smooth" });
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 16 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 350);