TestCase("FormalParametersArgumentsTest", {
    "test dynamic relationship": function () {
        function modify(a, b) {
            b = 42;
            arguments[0] = arguments[1];
            return a;
        }

        assertEquals(42, modify(1, 2));
        assertUndefined(modify(1));
    },

    "test scope": function () {
        function sum() {
            assertUndefined(i);
            assertException(function () {
                assertUndefined(someVar);
            }, "ReferenceError");
            var total = arguments[0];
            if (arguments.length > 1) {
                for (var i = 1, l = arguments.length; i < l; i++) {
                    total += arguments[i];
                }
            }
            assertEquals(5, i);
            return total;
        }

        sum(1, 2, 3, 4, 5);
    }
});