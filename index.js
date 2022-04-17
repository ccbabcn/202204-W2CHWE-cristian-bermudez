class Cell {
  status;
  aliveNeighbours = 0;

  constructor(positionX, positionY, status) {
    this.status = status;
  }

  neighbours() {
    return this.aliveNeighbours;
  }
}

const randomAlive = () => {
  const isAlive = Math.floor(Math.random() * 2);
  if (isAlive === 1) {
    return "alive";
  }
  return "dead";
};

const cellsGridMaker = (totalX, totalY) => {
  const cellsGrid = [];
  for (let actualX = 0; actualX < totalX; actualX++) {
    cellsGrid.push([]);
    for (let actualY = 0; actualY < totalY; actualY++) {
      const newCell = new Cell(randomAlive());
      cellsGrid[actualX].push(newCell);
    }
  }

  return cellsGrid;
};

const cellsUniverse = cellsGridMaker(3, 3);
