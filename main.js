const startBtn = document.getElementById("startBtn");
const overlay = document.getElementById("overlay");
const music = document.getElementById("music");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

startBtn.onclick = () => {
  overlay.style.display = "none";
  music.play();
  escribir();
};

function escribir() {
  const texto1 = "Perdón mi amor ❤️";
  const texto2 = "Te amo muchísimo reyna hermosa";

  let i = 0;

  const intervalo = setInterval(() => {
    title.textContent += texto1[i];
    i++;

    if (i === texto1.length) {
      clearInterval(intervalo);

      setTimeout(() => escribir2(texto2), 500);
    }
  }, 70);
}

function escribir2(texto) {
  let i = 0;

  const intervalo = setInterval(() => {
    subtitle.textContent += texto[i];
    i++;

    if (i === texto.length) {
      clearInterval(intervalo);
    }
  }, 50);
}

/* CORAZONES */
function crearCorazon() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(crearCorazon, 300);