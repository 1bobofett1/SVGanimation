var lastCoordinate = null;
window.addEventListener('click', function (event) {
    var svg = document.getElementById('svg');
    var newCoordinate = { x: event.offsetX, y: event.offsetY };
    if (lastCoordinate) {
        var newLine = document.createElementNS('http://www.w3.org/2000/svg', "path");
        newLine.setAttribute('d', "M ".concat(lastCoordinate.x, " ").concat(lastCoordinate.y, " L ").concat(newCoordinate.x, " ").concat(newCoordinate.y));
        newLine.setAttribute('stroke', 'black');
        svg.appendChild(newLine);
    }
    lastCoordinate = newCoordinate;
});
