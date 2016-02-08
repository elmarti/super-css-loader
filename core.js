superCSSLoader = {
    /*
     * Load the CSS into the Meteor app. 
     * @param {string} A url to load the file from
     * @param {object} A set of attributes to be set on the link element as per https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
     * @param {object} can include id - if null, one will be created.
     */
    loadStatic: function(url, attributes, options, callback) {
        let returnData = {};
        //Generate link element
        let fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", url);
        //Add any attributes
        if (attributes)
            for (var key in attributes)
                fileref.setAttribute(key, attributes[key]);
        //Add data to returned object
        returnData.element = fileref;
        //identifier span
        let linkSpan = document.createElement('span');
        //if id is specified, then assign it to span, else assign a random one. 
        if (options.id)
            returnData.id = options.id
        else
            returnData.id = Math.random().toString(36).substring(7);
        linkSpan.setAttribute("id", returnData.id);
        //Assign it all to the DOM. 
        $(linkSpan).append(fileref);
        $('head').append(linkSpan);
        if (callback) return callback(returnData);
        return returnData;
    }
};