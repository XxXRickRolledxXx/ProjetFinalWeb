var renderer = PIXI.autoDetectRenderer(660, 660, {backgroundColor: 0x2C2D2B, antialias: true});
document.getElementById("gs").appendChild(renderer.view);

var stage = new PIXI.Container();

var boxWidth = renderer.width / 10;
var boxHeight = renderer.height / 10;

var playerBox = new PIXI.Graphics();
playerBox.beginFill(0x00FF0E);
playerBox.drawRect(0, 0, boxWidth, boxHeight);
playerBox.endFill();

var goalBox = new PIXI.Graphics();
goalBox.beginFill(0xFF0000);
goalBox.drawRect(0, 0, boxWidth, boxHeight);
goalBox.endFill();

stage.addChild(playerBox);
stage.addChild(goalBox);

document.addEventListener('keydown', onKeyDown);

goalBoxSpawn();

animate();

function animate() {
    // Render the stage
    renderer.render(stage);

    checkPosition();
    requestAnimationFrame(animate);
}

function goalBoxSpawn() {

    var randomX = Math.floor((Math.random() * 10));
    var randomY = Math.floor((Math.random() * 10));

    goalBox.position.x = boxWidth * randomX;
    goalBox.position.y = boxHeight * randomY;

}

function checkPosition() {
    if (goalBox.position.x === playerBox.position.x && goalBox.position.y === playerBox.position.y) {
        goalBoxSpawn();
    }
}

function onKeyDown(key) {
    // W Key is 87
    // Up arrow is 87
    if (key.keyCode === 87 || key.keyCode === 38) {
        if (playerBox.position.y != 0) {
            playerBox.position.y -= boxHeight;
        }
    }

    // S Key is 83
    // Down arrow is 40
    if (key.keyCode === 83 || key.keyCode === 40) {
        if (playerBox.position.y != renderer.height - boxHeight) {
            playerBox.position.y += boxHeight;
        }
    }

    // A Key is 65
    // Left arrow is 37
    if (key.keyCode === 65 || key.keyCode === 37) {
        if (playerBox.position.x != 0) {
            playerBox.position.x -= boxWidth;
        }
    }

    // D Key is 68
    // Right arrow is 39
    if (key.keyCode === 68 || key.keyCode === 39) {
        if (playerBox.position.x != renderer.width - boxWidth) {
            playerBox.position.x += boxWidth;
        }
    }
}

