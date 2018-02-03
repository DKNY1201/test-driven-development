var loopLength = 100000;
var array = [];
for (var i = 0; i < loopLength; i++) {
    array[i] = "item" + i;
}
benchmark("Loop performance", {
    "for-loop": function () {
        for (var i = 0, item; i < array.length; i++) {
            item = array[i];
        }
    },
    "for-loop, cached length": function () {
        for (var i = 0, l = array.length, item; i < l; i++) {
            item = array[i];
        }
    },
    "forLoopDirectAccess": function () {
        for (var i = 0, item; (item = array[i]); i++) {
        }
    },
    "whileLoop": function () {
        var i = 0, item;
        while (i < array.length) {
            item = array[i];
            i++;
        }
    },
    "whileLoopCachedLength": function () {
        var i = 0, l = array.length, item;
        while (i < l) {
            item = array[i];
            i++;
        }
    },
    "reversedWhileLoop": function () {
        var l = array.length, item;
        while (l--) {
            item = array[l];
        }
    },

    "double reversed while-loop": function () {
        var l = array.length, i = l, item;
        while (i--) {
            item = array[l - i - 1];
        }
    }
}, 1000);