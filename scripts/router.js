var routes = [];

function registerRoute(path, tmpId, controller) {
    routes.push(path);
    routes[path] = {tmpId:tmpId, controller: controller};
}

function registerAllRoutes() {

    registerRoute('/', 'home', function () {

    });

    registerRoute('/about', 'about', function () {
        console.log('about us');
    });

    registerRoute('/contact', 'contact', function () {
        console.log('contact')
    });
}

var contentElement = null;

function router () {

    console.log('router');
    contentElement = contentElement || document.getElementById('view');
    var url = location.hash.slice(1) || '/';
    var route = routes[url];

    if (contentElement && route) {
        var filledTemplate = getTemplate(route.tmpId);
        contentElement.innerHTML = filledTemplate;
    } else if (route == null) {
        // change to default one :)
        window.location.hash = '#/';
    }
}


// Listen on hash change:
// In modern browsers(IE8+, FF3.6+, Chrome), you can just listen to the hashchange event on window.
// In some old browsers, you need a timer that continually checks location.hash. There is jQuery plugin
// just for this
window.addEventListener('hashchange', router);
window.addEventListener('load', router);



