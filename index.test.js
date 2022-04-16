describe("Given invertState function", () => {
  describe("When it receives the array [false, true, false]", () => {
    test("Then it should return a new array [true, false, true]", () => {
      const initialArray = [false, true, false];
      const expectedArray = [true, false, true];

      const invertInitialArray = invertState(initialArray);

      expect(invertInitialArray).toBe(expectedArray);
    });
  });
});
