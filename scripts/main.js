var mainContent = document.getElementById('view');

function init() {
    console.log('init');
    registerAllRoutes();
}

function getTemplate(templateId) {

    var data = null;
    var temp;

    switch(templateId) {
        case "home":
            temp = Handlebars.templates['homeTemp'];
            break;
        case "about":
            var data = getAboutUsData();
            var temp = Handlebars.templates['aboutTemp'];
            break;
        case "contact":
            // no template for contact - for now
            temp = Handlebars.templates['contactTemp'];
            break;
        default:
            temp = Handlebars.templates['homeTemp'];
    }

    return temp(data);
}
