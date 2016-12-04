var mainContent = document.getElementById('view');
// var loading = false;

function init() {
    console.log('init');
    registerAllRoutes();
    // loading = false;
}

function goUp() {
    var offTop = $('#view').offset().top - 200;
    $('body').scrollTop(offTop);
}

function getTemplate(templateId) {

    var data = null;
    var temp;

    switch(templateId) {
        case "home":
            goUp();
            // loadVisualData();
            data = getLinks();
            temp = Handlebars.templates['homeTemp'];
            break;
        case "about":
            goUp();
            data = getAboutUsData();
            var temp = Handlebars.templates['aboutTemp'];
            break;
        case "gallery":
            goUp();
            data = getGalleryImages();
            temp = Handlebars.templates['galleryTemp'];
            break;
        // case "contact":
        //     goUp();
        //     temp = Handlebars.templates['contactTemp'];
        //     break;
        case "donate":
            goUp();
            data = getEventDates();
            temp = Handlebars.templates['addIngTemp'];
            break;
        case "cook":
            goUp();
            data = getEventDates();
            temp = Handlebars.templates['cookTemp'];
            break;
        case "calendar":
            goUp();
            data = getEventDates();
            temp = Handlebars.templates['calendarTemp'];
            break;
        default:
            temp = Handlebars.templates['homeTemp'];
    }

    return temp(data);
}

// for hiding and showing elements
// Handlebars.registerHelper('showFigure', function (src, options) {
//     console.log('src: ' + src);
//     return (src != null) ? '' : options.fn();
// });

$('#arr-go-down').on('click', function(e){

});

function findOutAboutDonation() {
    var targetElement = $('#steps-images');
    console.log(targetElement.offset());
    $('body').stop().animate({
        scrollTop: targetElement.offset().top - 200
    }, 1000);
}

function findOutAboutComunity() {
    var targetElement = $('#wrapper');
    console.log(targetElement.offset());
    $('body').stop().animate({
        scrollTop: targetElement.offset().top - 200
    }, 1000);
}

function goToStart() {
    var targetElement = $('#view');
    console.log(targetElement.offset());
    $('body').stop().animate({
        scrollTop: targetElement.offset().top - 200
    }, 1000);
}

$.ajaxSetup({
    cache: true
});