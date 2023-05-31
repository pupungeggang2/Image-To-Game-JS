window.onload = main;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function main() {
    canvas = document.getElementById("Program");
    context = canvas.getContext("2d");

    canvas.addEventListener("mousedown", mouseDown, false);
    canvas.addEventListener("mousedown", mouseDown, false);
    window.addEventListener("keydown", keyDown, false);
    window.addEventListener("keyup", keyUp, false);

    programInstance = requestAnimationFrame(loop);
}

function loop() {
    programInstance = requestAnimationFrame(loop);
}

function errorHandle() {
    cancelAnimationFrame(programInstance);
}

function rightClick() {
    return false;
}