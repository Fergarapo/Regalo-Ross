const option1 = document.getElementById("gift1");
const option2 = document.getElementById("gift2");
const option3 = document.getElementById("gift3");
const option4 = document.getElementById("gift4");

// Carta
option1.addEventListener("click", function () {
  window.location.href = "../regalos/carta.html";
});

// Flores
option2.addEventListener("click", function () {
  window.location.href = "../regalos/flores.html";
});

// Animación
option3.addEventListener("click", function () {
  window.location.href = "../regalos/galaxia.html";
});

// ???
option4.addEventListener("click", function () {
  window.location.href = "../regalos/corazon.html"; // o lo que quieras
});
