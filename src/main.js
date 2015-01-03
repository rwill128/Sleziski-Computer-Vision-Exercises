requirejs.config({
    paths: {
        'zebra': '../lib/zebra',
        'lodash': '../lib/lodash'
    },

    shim: {
        'lodash': {
            exports: '_'
        }
    }
});

define(['app', 'zebra'], function(App, zebra) {
    var app = new App(zebra);
    app.start();
});