const CORRECT_USER = "bonita";
const CORRECT_PASS = "rositafresita";

let attempts = 0;

const form = document.getElementById("login-form");
const userInput = document.getElementById("username");
const passInput = document.getElementById("password");
const message = document.getElementById("message");

const hint1 = document.getElementById("hint1");
const hint2 = document.getElementById("hint2");
const hint3 = document.getElementById("hint3");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = userInput.value.trim();
    const pass = passInput.value.trim();

    if (user === CORRECT_USER && pass === CORRECT_PASS) {
        message.style.color = "green";
        message.textContent = "¡Correcto! 💕";

        window.location.href = "../menu/menu.html";
        return;
    }

    attempts++;
    message.style.color = "red";
    message.innerText = `Intenta otra vez, o puedes usar una pista
(Pista desbloqueada ${attempts}/3)`;

    if (attempts === 1) {
        hint1.disabled = false;
    } else if (attempts === 2) {
        hint2.disabled = false;
    } else if (attempts === 3) {
        hint3.disabled = false;
        // Opcional: bloquear más intentos
        // userInput.disabled = true;
        // passInput.disabled = true;
        // form.querySelector("button[type='submit']").disabled = true;
    }
});

const hintText = document.getElementById("hint-text");

hint1.addEventListener("click", function () {
    hintText.textContent = "Pista 1: Siempre te lo decía cuando te preguntaba: '¿Cómo estás?' (Referencia: https://www.youtube.com/watch?v=hBOYrQQrsOo).";
});

hint2.addEventListener("click", function () {
    hintText.textContent = "Pista 2: La contraseña es una de tus series favoritas, relacionada el rosa, y a cierta fruta.";
});

hint3.addEventListener("click", function () {
    hintText.textContent = "Pista 3: Por si no lo has descubierto aún el usuario es: bonita. La contraseña es: rositafresita.";
});
