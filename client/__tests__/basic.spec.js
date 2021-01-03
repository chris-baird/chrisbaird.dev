describe("Test suite client", () => {
  it("Adds two numbers together", (done) => {
    setTimeout(() => {
      expect(1 + 1).toEqual(2);
      done();
    }, 2300);
  });
});
