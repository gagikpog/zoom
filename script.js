let zoom = 0;

document.addEventListener("DOMContentLoaded", () => {
    new Zoom({zoomHandler: (change) => {
        zoom += change;
    }});
});
