let score = 0;
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");

// Función para mover el cuadro a una posición aleatoria
function moveTarget() {
    // Obtén el tamaño de la ventana
    const maxX = window.innerWidth - target.offsetWidth; // Asegura que el cuadro no se salga de la pantalla
    const maxY = window.innerHeight - target.offsetHeight;

    // Genera una posición aleatoria dentro de esos límites
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Coloca el cuadro en la nueva posición
    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

// Función para actualizar los puntos
function updateScore() {
    score++;
    scoreDisplay.textContent = score;
    moveTarget(); // Mueve el cuadro a una nueva posición
}

// Evento cuando el usuario hace clic en el cuadro
target.addEventListener("click", updateScore);

// Inicializa el primer movimiento del cuadro
moveTarget();
