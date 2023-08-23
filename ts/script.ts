type Coordinate = {
    x: number,
    y: number,
}

let lastCoordinate: Coordinate | null = null;

window.addEventListener('click', (event) => {
    const svg = document.getElementById('svg') as unknown as SVGSVGElement;
    const newCoordinate: Coordinate = {x: event.offsetX, y: event.offsetY};

  
    if(lastCoordinate) {
        const newLine = document.createElementNS('http://www.w3.org/2000/svg',"path");
        newLine.setAttribute('d', `M ${lastCoordinate.x} ${lastCoordinate.y} L ${newCoordinate.x} ${newCoordinate.y}`);
        newLine.setAttribute('stroke', 'black');
        svg.appendChild(newLine);
    }
  
    lastCoordinate = newCoordinate;
})