# super-css-loader

super-css-loader lets you load and remove CSS the easy way

* param1: url - root is public folder, urls can be used aswell
* param2 : attributes (optional) - a set of attributes to append to the load element (you must set to null, if not used)
* param3 : options (optional) contains the id you would like to assign to the CSS ( you must set to null if not used, a random id will be assigned)
* param4 : callback (optional) 
* return : an object containing the element object and the id

### Load static (can be removed) CSS into a single page
If you load in onRendered(), there is sometimes a moment where the page appears without CSS - this is not the case with onCreated()
```javascript

Template.parent_template.onCreated(function() {
    superCSSLoader.loadStatic("/front.css", 
        {
            charset:"utf-8"
        },{
        id:"myCSSID"
        },
        function(data) {
            //id to access span>link element
            console.log(data.id); 
            //the HTML element
            console.log(data.element);
        }
    );
});

let cssData = superCSSLoader.loadStatic("/front.css", 
        {
            charset:"utf-8"
        },{
        id:"myCSSID"
        }
    );
```

###Removing the CSS 
You simply need to destroy the element containing the CSS 
```javascript
$("#assignedID").remove();
```
#TODO
* add non static load type