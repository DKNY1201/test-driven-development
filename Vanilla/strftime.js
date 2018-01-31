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



assert.count = 0;

var date = new Date(2009, 9, 2);

try {
    assert('%Y should return a full year', date.strftime('%Y') == '2009');
    assert("%m should return month",
        date.strftime("%m") === "10");
    assert("%d should return date",
        date.strftime("%d") === "02");
    assert("%y should return year as two digits",
        date.strftime("%y") === "09");
    assert("%F should act as %Y-%m-%d",
        date.strftime("%F") === "2009-10-02");

    console.log(assert.count, 'tests OK');
} catch(e) {
    console.error(e.message);
}