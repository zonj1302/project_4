document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    let xCoordinate = "";
    let yCoordinate = "";
    let color = "green";

    document.addEventListener('mousemove', function (event){
        xCoordinate = event.clientX;
        yCoordinate = event.clientY;
    })

    // Color update
    const green = document.getElementById("green");
    green.addEventListener("click", function() {
        color = green.className;
        green.style.border = "3px solid black";
        blue.style.border = "none";
        purple.style.border = "none";
    })
    const blue = document.getElementById("blue");
    blue.addEventListener("click", function() {
        color = blue.className;
        green.style.border = "none";
        blue.style.border = "3px solid black";
        purple.style.border = "none";
    })
    const purple = document.getElementById("purple");
    purple.addEventListener("click", function() {
        color = purple.className;
        green.style.border = "none";
        blue.style.border = "none";
        purple.style.border = "3px solid black";
    })

    container.addEventListener("click", function() {
        const p = document.createElement("p");
        let intialSize = Math.floor((Math.random() * 250) + 100);
        p.style.width = `${intialSize}px`;
        p.style.height = p.style.width;
        p.style.borderRadius = "50%";
        p.style.backgroundColor = color;
        p.style.position = "absolute";
        p.style.border = "3px solid black";
        // computation for mouse coordinate to become the circle center
        const circleSize = parseInt(p.style.width, 10);
        const xCenter = xCoordinate - circleSize / 2;
        const yCenter = yCoordinate - circleSize / 2;
        p.style.top = `${yCenter}px`;
        p.style.left = `${xCenter}px`;
        container.appendChild(p);
        // reduce circle size until it vanish
        let currentSize = intialSize;
        let shrinkCircle = setInterval(function() {
            currentSize -= 5;
            if (currentSize <= 0) {
                clearInterval(shrinkCircle);
                p.remove();
            } else {
                p.style.width = `${currentSize}px`;
                p.style.height = `${currentSize}px`;
            }
        }, 30)
    })

    const reset = document.getElementById("reset-btn");
    reset.addEventListener("click", function() {
        container.innerHTML = "";
        green.style.border = "3px solid black";
        blue.style.border = "none";
        purple.style.border = "none";
        color = "green";
    })
})
