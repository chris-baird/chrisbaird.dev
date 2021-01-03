describe("Test suite Server", () => {
  it("Adds two numbers together", (done) => {
    setTimeout(() => {
      expect(1 + 1).toEqual(2);
      done();
      return;
    }, 2300);
  });
});
