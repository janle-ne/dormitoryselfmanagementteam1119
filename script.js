
/* =================================
   PLAYER 1: TODAY IS YOUR DAY
   M2 - Step 2: Player Movement
================================= */

// 1. Get Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 2. Game dimensions
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

// 3. Keyboard controls
const keys = {
    left: false,
    right: false
};

// Detect key press
document.addEventListener("keydown", function(event) {

    if (
        event.key === "ArrowLeft" ||
        event.key.toLowerCase() === "a"
    ) {
        keys.left = true;
        event.preventDefault();
    }

    if (
        event.key === "ArrowRight" ||
        event.key.toLowerCase() === "d"
    ) {
        keys.right = true;
        event.preventDefault();
    }

    // Jump when Space is pressed
    if (event.code === "Space" && player.isOnGround) {
        player.velocityY = -player.jumpPower;
        player.isOnGround = false;
        event.preventDefault();
    }

});
// Detect key release
document.addEventListener("keyup", function(event) {

    if (
        event.key === "ArrowLeft" ||
        event.key.toLowerCase() === "a"
    ) {
        keys.left = false;
    }

    if (
        event.key === "ArrowRight" ||
        event.key.toLowerCase() === "d"
    ) {
        keys.right = false;
    }

});

// 4. Create player object
const player = {
    x: 100,
    y: 450,
    width: 40,
    height: 50,

    // Horizontal movement
    speed: 5,

    // Jump and gravity
    velocityY: 0,
    jumpPower: 15,
    gravity: 0.7,
    isOnGround: false
};
// 5. Draw the ground
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

// 6. Draw the robot
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

// 7. Update player position
function updatePlayer() {

    // Move left
    if (keys.left) {
        player.x -= player.speed;
    }

    // Move right
    if (keys.right) {
        player.x += player.speed;
    }

    // Keep player inside the screen
    if (player.x < 0) {
        player.x = 0;
    }

    if (player.x + player.width > GAME_WIDTH) {
        player.x = GAME_WIDTH - player.width;
    }

}

// 8. Game loop
function gameLoop() {

    // Clear previous frame
    ctx.clearRect(
        0,
        0,
        GAME_WIDTH,
        GAME_HEIGHT
    );

    // Update game objects
    updatePlayer();

    // Draw game objects
    drawGround();
    drawPlayer();

    // Repeat game loop
    requestAnimationFrame(gameLoop);

}

// 9. Start game
gameLoop();
