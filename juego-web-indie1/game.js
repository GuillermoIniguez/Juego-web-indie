let score = 0;  // Puntos
let lives = 3;  // Vidas del jugador
let timeLeft = 30;  // Tiempo en segundos
let gameInterval;
let timerInterval;

const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const timerDisplay = document.getElementById("timer");
const gameArea = document.getElementById("gameArea");
const gameOverScreen = document.getElementById("gameOver");

// Sonidos
let clickSound = new Audio('sounds/beep-07.wav');
let gameOverSound = new Audio('sounds/beep-08b.wav');

// Función para mover el cuadro a una posición aleatoria
function moveTarget() {
    const maxX = window.innerWidth - target.offsetWidth;
    const maxY = window.innerHeight - target.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

// Función para actualizar los puntos
function updateScore() {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();  // Mueve el cuadro a una nueva posición
    playClickSound();  // Reproduce el sonido al hacer clic
}

// Función para actualizar el temporizador
function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}

// Función para perder vida
function loseLife() {
    lives--;
    livesDisplay.textContent = lives;
    if (lives <= 0) {
        endGame();
    }
}

// Función para finalizar el juego
function endGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    gameArea.style.display = "none";  // Oculta el área del juego
    gameOverScreen.style.display = "block";  // Muestra la pantalla de fin de juego
    playGameOverSound(); // Reproduce el sonido al terminar el juego
    document.getElementById("finalScore").textContent = `Tu puntaje final es: ${score}`;
}

// Función para reproducir el sonido al hacer clic
function playClickSound() {
    clickSound.play();
}

// Función para reproducir el sonido al finalizar el juego
function playGameOverSound() {
    gameOverSound.play();
}

// Función que detecta si el clic fue fuera del cuadro
function missedClick(event) {
    // Verifica si el clic fue fuera del cuadro (fuera de los límites del cuadro)
    const rect = target.getBoundingClientRect();
    const clickedInside = (
        event.clientX >= rect.left && event.clientX <= rect.right &&
        event.clientY >= rect.top && event.clientY <= rect.bottom
    );

    if (!clickedInside) {
        loseLife();  // Si fallas, pierde una vida
    }
}

// Inicia el juego
function startGame() {
    gameInterval = setInterval(moveTarget, 1000);  // Mueve el cuadro cada 1 segundo
    timerInterval = setInterval(updateTimer, 1000);  // Actualiza el temporizador cada 1 segundo
    moveTarget();  // Mueve el cuadro inicialmente

    // Evento de clic fuera del cuadro (fallar el clic)
    window.addEventListener("click", missedClick);
}

// Evento cuando el jugador hace clic en el cuadro
target.addEventListener("click", updateScore);

// Comienza el juego cuando la página carga
window.onload = startGame;
