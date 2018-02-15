(function () {
    var ajax = tddjs.namespace("ajax");

    function get(url) {
        if (typeof url != "string") {
            throw new TypeError("url must be a string");
        }
    }

    ajax.get = get;
})();
