var __context = this;
var depth = 0;
var requirejs = function (exports) {
    exports.require = function () {
        var modules = arguments[0];
        var callback = arguments[1];
        var items = [];
        for (var i = 0; i < modules.length; i++) {
            var xmlHttp = new XMLHttpRequest();
            var module = modules[i];
            console.log(module);
            var _class = module.indexOf('#') > 0 ? module.split('#')[1] : null;
            if (_class != null) {
                module = module.split('#')[0];
            }
            
            module = module + '.js';
            xmlHttp.open('GET', module, false);
            xmlHttp.send(null);
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText);
                var code = ("(function () { var exports = {}; " + xmlHttp.responseText + "; console.log('exports" + depth + "', exports); return exports;  })();");
                console.log(code);
                var mod = eval(code);
                console.log("Mod", mod);
                if (_class != null) {
                    console.log(mod);
                    mod = mod[_class];
                }
                items.push(mod);
            
            }
        }
            callback.apply(__context, items);
    }
   
};

requirejs(window);
