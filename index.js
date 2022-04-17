class Cell {
  status;
  aliveNeighbours = 0;

  constructor(status) {
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
console.table(cellsUniverse);

const aliveNeighboursCounter = (cellsArray) => {
  for (let actualRow = 0; actualRow < cellsArray.length; actualRow++) {
    for (let actualCol = 0; actualCol < cellsArray[0].length; actualCol++) {
      if (typeof cellsArray[actualRow - 1] !== "undefined") {
        if (typeof cellsArray[actualRow - 1][actualCol - 1] !== "undefined") {
          if (cellsArray[actualRow - 1][actualCol - 1].status === "alive") {
            cellsUniverse[actualRow][actualCol].aliveNeighbours++;
          }
        }
        if (cellsArray[actualRow - 1][actualCol].status === "alive") {
          cellsUniverse[actualRow][actualCol].aliveNeighbours++;
        }
        if (typeof cellsArray[actualRow - 1][actualCol + 1] !== "undefined") {
          if (cellsArray[actualRow - 1][actualCol + 1].status === "alive") {
            cellsUniverse[actualRow][actualCol].aliveNeighbours++;
          }
        }
      }
      if (typeof cellsArray[actualRow][actualCol - 1] !== "undefined") {
        if (cellsArray[actualRow][actualCol - 1].status === "alive") {
          cellsUniverse[actualRow][actualCol].aliveNeighbours++;
        }
      }
      if (typeof cellsArray[actualRow][actualCol + 1] !== "undefined") {
        if (cellsArray[actualRow][actualCol + 1].status === "alive") {
          cellsUniverse[actualRow][actualCol].aliveNeighbours++;
        }
      }
      if (typeof cellsArray[actualRow + 1] !== "undefined") {
        if (cellsArray[actualRow + 1][actualCol].status === "alive") {
          cellsUniverse[actualRow][actualCol].aliveNeighbours++;
        }
        if (typeof cellsArray[actualRow + 1][actualCol - 1] !== "undefined") {
          if (cellsArray[actualRow + 1][actualCol - 1].status === "alive") {
            cellsUniverse[actualRow][actualCol].aliveNeighbours++;
          }
        }
        if (typeof cellsArray[actualRow + 1][actualCol + 1] !== "undefined") {
          if (cellsArray[actualRow + 1][actualCol + 1].status === "alive") {
            cellsUniverse[actualRow][actualCol].aliveNeighbours++;
          }
        }
      }
    }
  }
};
aliveNeighboursCounter(cellsUniverse);
console.table(cellsUniverse);
