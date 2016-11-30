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
        case "gallery":
            var data = getGalleryImages();
            temp = Handlebars.templates['galleryTemp'];
            break;
        case "contact":
            // no template for contact - for now
            temp = Handlebars.templates['contactTemp'];
            break;
        case "donate":
            // no template for contact - for now
            temp = Handlebars.templates['addIngTemp'];
            break;
        case "contact":
            // no template for contact - for now
            temp = Handlebars.templates['cookTemp'];
            break;
        default:
            temp = Handlebars.templates['homeTemp'];
    }

    return temp(data);
}
