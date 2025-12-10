let score = 0;

const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");

// Función para mover el cuadro a una posición aleatoria
function moveTarget() {
    const maxX = window.innerWidth - 120;  // 120 es el ancho del cuadro
    const maxY = window.innerHeight - 120; // 120 es el alto del cuadro
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
}

// Evento cuando el usuario hace clic en el cuadro
target.addEventListener("click", updateScore);

// Inicializa el primer movimiento del cuadro
moveTarget();

