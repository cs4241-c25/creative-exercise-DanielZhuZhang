const AddPoints = function() {

    const polygon = document.getElementById("Spiral");

    let points = polygon.getAttribute("points");

    for (let i = 0; i < 3; i++) {
        const x = getRandomInteger(0, 500);
        const y = getRandomInteger(0, 500);
        points += ` ${x},${y}`;
    }

    polygon.setAttribute("points", points);
};

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
