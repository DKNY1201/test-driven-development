Date.prototype.strftime = (function () {
    function strftime(format) {
        var date = this;
        return (format + "").replace(/%([a-zA-Z])/g,
            function (m, f) {
                var formatter = Date.formats && Date.formats[f];
                if (typeof formatter == "function") {
                    return formatter.call(Date.formats, date);
                } else if (typeof formatter == "string") {
                    return date.strftime(formatter);
                }
                return f;
            });
    }

    // Internal helper
    function zeroPad(num) {
        return (+num < 10 ? "0" : "") + num;
    }

    Date.formats = {
        // Formatting methods
        d: function (date) {
            return zeroPad(date.getDate());
        },
        m: function (date) {
            return zeroPad(date.getMonth() + 1);
        },
        y: function (date) {
            return zeroPad(date.getYear() % 100);
        },
        Y: function (date) {
            return date.getFullYear();
        },
        // Format shorthands
        F: "%Y-%m-%d",
        D: "%m/%d/%y"
    };
    return strftime;
}());

function assert(message, expr) {
    if (!expr) {
        throw new Error(message);
    }

    assert.count++;
    return true;
}

// assert.count = 0;
//
// var date = new Date(2009, 9, 2);
//
// try {
//     assert('%Y should return a full year', date.strftime('%Y') == '21009');
//     assert("%m should return month",
//         date.strftime("%m") === "10");
//     assert("%d should return date",
//         date.strftime("%d") === "02");
//     assert("%y should return year as two digits",
//         date.strftime("%y") === "09");
//     assert("%F should act as %Y-%m-%d",
//         date.strftime("%F") === "2009-10-02");
//
//     output(assert.count + ' tests OK', '#0c0');
// } catch (e) {
//     output('Test failed: ' + e.message, '#c00');
// }

function output(text, color) {
    var p = document.createElement("p");
    p.innerHTML = text;
    p.style.color = color;
    document.body.appendChild(p);
}

// TEST CASE
function testCase(name, tests) {
    assert.count = 0;
    var successful = 0;
    var testCount = 0;
    var hasSetUp = typeof tests.setUp == "function";
    var hasTearDown = typeof tests.tearDown == "function";
    for (var test in tests) {
        if (!/^test/.test(test)) {
            continue;
        }
        testCount++;
        try {
            if (hasSetUp) {
                tests.setUp();
            }

            tests[test]();
            output(test, "#0c0");

            if (hasTearDown) {
                tests.tearDown();
            }

            successful++;
        } catch (e) {
            output(test + " failed: " + e.message, "#c00");
        }
    }
    var color = successful == testCount ? "#0c0" : "#c00";
    output("<strong>" + testCount + " tests, " +
        (testCount - successful) + " failures</strong>",
        color);
}

testCase("strftime test", {
    setUp: function () {
        console.log("Setting up...");
        this.date = new Date(2009, 9, 2);
    },
    tearDown: function () {
        console.log("Tear Down...");
    },
    "test format specifier %Y": function () {
        assert("%Y should return full year",
            this.date.strftime("%Y") === "2001");
    },
    "test format specifier %m": function () {
        assert("%m should return month",
            this.date.strftime("%m") === "10");
    },
    "test format specifier %d": function () {
        assert("%d should return date",
            this.date.strftime("%d") === "02");
    },
    "test format specifier %y": function () {
        assert("%y should return year as two digits",
            this.date.strftime("%y") === "09");
    },
    "test format shorthand %F": function () {
        assert("%F should act as %Y-%m-%d",
            this.date.strftime("%F") === "2009-10-02");
    }
});