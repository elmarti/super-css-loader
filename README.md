# all-file-loader

all-file-loader lets you load css/js the easy way

* param1: url - root is public folder, urls can be used aswell
* param2 : options (optional) - an set of attributes to append to the load element (null, if not used)
* param3 : callback (optional) 

###### Load CSS into a single page
After the below template is destroyed, the CSS will be removed from the application.
```javascript

Template.parent_template.onRendered(function() {
    allFileLoader.loadCSS("/front.css", 
        {
            charset:"utf-8"
        }, 
        function() {
            console.log("CSS loaded!");
        }
    );
});
```

###### Load JS into a single page 
After the template is destroyed, the JS will be removed from the application
```javascript
Template.parent_template.onRendered(function() {
    allFileLoader.loadJS("http://www.url.com/random.js", 
        null, 
        function() {
            console.log("JS loaded!");
        }
    );
});
```
