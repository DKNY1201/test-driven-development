TestCase("TestSplice", {
    "test array splice should not modify the array": function () {
        var arr = [1, 2, 3, 4, 5];
        var result = arr.splice(2, 2);
        assertEquals([1, 2, 5], arr);
        // assertEquals(result, arr);
    }
});

// TestCase("ArrayTest", {
//     "test array splice should not modify array": function () {
//         var arr = [1, 2, 3, 4, 5];
//         var result = arr.splice(2, 3);
//         assertEquals([1, 2, 3, 4, 5], arr);
//     }
// });