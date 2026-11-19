
/* =================================
   PLAYER 1: TODAY IS YOUR DAY
   M2 - Step 1: Create Player
================================= */

// 1. Get Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 2. Game dimensions
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

// 3. Create player object
const player = {
    x: 100,
    y: 450,
    width: 40,
    height: 50
};

// 4. Draw the ground
function drawGround() {
    ctx.fillStyle = "#103525";

    ctx.fillRect(
        0,
        520,
        GAME_WIDTH,
        80
    );

    // Ground details
    ctx.fillStyle = "#22C55E";

    ctx.fillRect(
        0,
        520,
        GAME_WIDTH,
        5
    );
}

// 5. Draw the robot
function drawPlayer() {

    // Robot body
    ctx.fillStyle = "#22C55E";
    ctx.fillRect(
        player.x + 5,
        player.y + 15,
        30,
        30
    );

    // Robot head
    ctx.fillStyle = "#86EFAC";
    ctx.fillRect(
        player.x,
        player.y,
        40,
        25
    );

    // Robot eyes
    ctx.fillStyle = "#071A12";

    ctx.fillRect(
        player.x + 8,
        player.y + 8,
        7,
        7
    );

    ctx.fillRect(
        player.x + 25,
        player.y + 8,
        7,
        7
    );

    // Robot antenna
    ctx.fillStyle = "#FACC15";

    ctx.fillRect(
        player.x + 17,
        player.y - 8,
        6,
        8
    );
}

// 6. Draw the game
function gameLoop() {

    ctx.clearRect(
        0,
        0,
        GAME_WIDTH,
        GAME_HEIGHT
    );

    drawGround();
    drawPlayer();

    requestAnimationFrame(gameLoop);
}

// 7. Start game
gameLoop();
