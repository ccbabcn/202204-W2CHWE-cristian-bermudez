class Cell {
  positionX;
  positionY;
  status;
  aliveNeighbours = 0;

  constructor(positionX, positionY, status) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.status = status;
  }

  neighbours() {
    return this.aliveNeighbours;
  }
}
