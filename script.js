
// =================================
// PLAYER 1: TODAY IS YOUR DAY
// Main Game Script
// =================================

// 1. Get the game canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 2. Game settings
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// 3. Set canvas resolution
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

// 4. Game state
let gameRunning = true;

// 5. Game loop
function gameLoop() {

    // Clear the previous frame
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw a test message
    ctx.fillStyle = "#86EFAC";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";

    ctx.fillText(
        "PLAYER 1: GAME INITIALIZED!",
        GAME_WIDTH / 2,
        GAME_HEIGHT / 2
    );

    // Request the next frame
    if (gameRunning) {
        requestAnimationFrame(gameLoop);
    }
}

// 6. Start the game
gameLoop();
