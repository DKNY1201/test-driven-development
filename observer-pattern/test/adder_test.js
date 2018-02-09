function adder(base) {
    return function (num) {
        return num + base;
    }
}

TestCase("TestAdder", {
   "test should add or subtract one from arg": function () {
       var inc = adder(1);
       var dec = adder(-1);

       assertEquals(3, inc(2));
       assertEquals(3, dec(4));
       assertEquals(10, inc(dec(10)));
   }
});