var circle = {
    radius: 10,
    diameter: function () {
        return this.radius * 2;
    }
}

TestCase("Circle", {
    "test this inside object should refer to the object itself": function () {
        assertEquals(20, circle.diameter());
    },
    "test implicit this binding to global object": function () {
        var myDiameter = circle.diameter;
        assertNaN(myDiameter());

        var radius = 2;
        // assertEquals(4, myDiameter());
        assertEquals(100, circle.diameter.call({radius: 50}));
        // assertEquals(4, circle.diameter.call());
    }
})

var sum = function () {
    var total = 0;

    for (var i = 0, l = arguments.length; i < l; i++) {
        total += arguments[i];
    }

    return total;
}

TestCase("Sum", {
    "test sum using call and apply": function () {
        assertEquals(15, sum(1,2,3,4,5));
        assertEquals(15, sum.call(null, 1, 2, 3, 4, 5));
        assertEquals(15, sum.apply(null, [1,2,3,4,5]));
    }
})