const assert = require("assert");
const convert = require('../app');


describe("Temperature Conversion", () => {
    describe("cToF", () => {
        it("should convert -40 celsius to -40 fahrenheit", () => {
            assert.equal(-40, convert.cToF(-40));
        });

        it('should convert 0 celsius to 0 fahrenheit', () => {
            assert.equal(0, convert.fToC(32));
        });

        it('should return undefined if no temperature is input', () => {
            assert.equal(undefined, convert.cToF(''));
        });
    });

    describe("fToC", () => {
        it("should convert -40 fahrenheit to -40 celsius", () => {
            assert.equal(-40, convert.fToC(-40));
        });

        it('should convert 32 fahrenheit to 0 celsius', () => {
            assert.equal(0, convert.fToC(32));
        });

        it('should return undefined if no temperature is input', () => {
            assert.equal(undefined, convert.fToC(''));
        });
    });
});