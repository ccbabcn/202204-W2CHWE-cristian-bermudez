const invertState = (array) => {
  const invertedArray = [];
  for (let position = 0; position < array.length; position++) {
    invertedArray.push(!array[position]);
  }
  return invertedArray;
};

describe("Given invertState function", () => {
  describe("When it receives the array [false, true, false]", () => {
    test("Then it should return a new array [true, false, true]", () => {
      const initialArray = [false, true, false];
      const expectedArray = [true, false, true];

      const invertInitialArray = invertState(initialArray);

      expect(invertInitialArray).toEqual(expect.arrayContaining(expectedArray));
    });
  });
});

describe("Given countNeighbours function", () => {
  describe("When it receives the array [false, true, false]", () => {
    test("Then it should return the array [1, 0, 1]", () => {
      const neighboursArray = [false, true, false];
      const expectedNeighboursCountArray = [1, 0, 1];

      const countedNeighboursArray = countNeighbours(neighboursArray);

      expect(countedNeighboursArray).toEqual(
        expect.arrayContaining(expectedNeighboursCountArray)
      );
    });
  });
});
