allFileLoader = {
    loadCSS: function(url, options, callback) {
        let fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", url);
        if (options) {
            for (var key in options) {
                fileref.setAttribute(key, options[key]);
            }
            if (callback) return callback();
        }
    },
    loadJS: function(url, options, callback) {
        let fileref = document.createElement("script");
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", url);
        if (options) {
            for (var key in options) {
                fileref.setAttribute(key, options[key]);
            }
            if (callback) return callback();
        }
    }
};