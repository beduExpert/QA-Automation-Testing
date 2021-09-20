const {fibonacci} = require("./Fibonacci");


describe("TestFibonacci", () => {

    it("returns fibonacci value", async () => {
        expect(fibonacci(0)).toEqual(0);
        expect(fibonacci(1)).toEqual(1);
        expect(fibonacci(2)).toEqual(1);
        expect(fibonacci(6)).toEqual(8);
        expect(fibonacci(45)).toEqual(1134903170);
    });


});
