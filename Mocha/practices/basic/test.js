const assert = require('assert');


describe('Math', function () {
    it('Should test if 3*3 = 9', function () {
        assert.equal(9, 3*3);
    });

    it("Should test if (3–4)*8 = -8", () => {
        assert.equal(-8, (3-4) * 8);
    })
});
