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

const nextGenerationMaker = (cellsArray) => {
  for (let nextGenRows = 0; nextGenRows < cellsArray.length; nextGenRows++) {
    for (
      let nextGenCols = 0;
      nextGenCols < cellsArray[0].length;
      nextGenCols++
    ) {
      if (cellsArray[nextGenRows][nextGenCols].status === "alive") {
        if (
          cellsArray[nextGenRows][nextGenCols].aliveNeighbours === 2 ||
          cellsArray[nextGenRows][nextGenCols].aliveNeighbours === 3
        ) {
          cellsUniverse[nextGenRows][nextGenCols].status = "alive";
        } else {
          cellsUniverse[nextGenRows][nextGenCols].status = "dead";
        }
      }
      if (cellsArray[nextGenRows][nextGenCols].status === "dead") {
        if (cellsArray[nextGenRows][nextGenCols].aliveNeighbours === 3) {
          cellsUniverse[nextGenRows][nextGenCols].status = "alive";
        }
      }
    }
  }
};

const resetNeighboursCount = (cellsArray) => {
  for (let actualRow = 0; actualRow < cellsArray.length; actualRow++) {
    for (let actualCol = 0; actualCol < cellsArray[0].length; actualCol++)
      cellsUniverse[actualRow][actualCol].aliveNeighbours = 0;
  }
};

const allDeadChecker = () => {
  let allCellsDead = false;
  for (let gameRow = 0; gameRow < cellsUniverse.length; gameRow++) {
    const foundAliveCell = cellsUniverse.find(
      (cell) => cell.status === "alive"
    );
    if (typeof foundAliveCell === "undefined") {
      allCellsDead = true;
    }
  }
  return allCellsDead;
};

const gameManager = () => {
  aliveNeighboursCounter(cellsUniverse);
  nextGenerationMaker(cellsUniverse);
  resetNeighboursCount(cellsUniverse);
};

const gameLooper = () => {
  while (allDeadChecker === false) {
    gameManager();
  }
};

const intervalID = () => {
  setInterval(gameLooper, 500);
};
intervalID();
clearInterval(intervalID);
gameManager();
const htmlGridDrawer = () => {
  const cellsDomGrid = document.querySelector(".cells-container");
  for (let actualRow = 0; actualRow < cellsUniverse.length; actualRow++) {
    const divRow = document.createElement("div");
    divRow.className = "cells-container__rows";
    cellsDomGrid.appendChild(divRow);
    for (let actualCol = 0; actualCol < cellsUniverse[0].length; actualCol++) {
      const divCol = document.createElement("div");
      if (cellsUniverse[actualRow][actualCol].status === "alive") {
        divCol.className = "cells-container__cols cells-container__cols--alive";
      }
      divCol.className = "cells-container__cols cells-container__cols--dead";
      divRow.appendChild(divCol);
    }
  }
};

htmlGridDrawer();
