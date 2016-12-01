function getAboutUsData() {
    var data = {
        title: 'Really cool people',
        people: [
            {
                name: 'John',
                age: 34,
                email: 'john@gmail.com'
            },
            {
                name: 'Sally',
                age: 22,
                email: 'sally12@gmail.com'
            },
            {
                name: 'George',
                age: 45,
                email: 'george@hotmail.com'
            }
        ]
    };

    console.dir(data);
    return data;
}

function getFirstDayDateFromCurrentMonth() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    return new Date(currentYear, currentMonth, 1);
}

function getCurrentMonth() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    return currentMonth;
}
function getEventDates() {

    var currentMonth = getCurrentMonth();
    var firstDayDate = getFirstDayDateFromCurrentMonth();
    var monthObj = months[currentMonth];

    var data = {
        currentMonth: {
            name: monthObj.name,
            ordinalNum: monthObj.ord
        },
        rows: getRows(),
        firstDay: {
            value : firstDayDate.getDay(),
            name : days[firstDayDate.getDay()].name
        },
        events: [
            {
                type: "mealDonation",
                time: "11:30",
                date: "2016-12-01T23:00:00.000Z",
                city: "Skopje",
                community: "Centar",
                place: "Majka Tereza"
            },
            {
                type: "mealPrep",
                time: "18:30",
                date: "2016-11-01T23:00:00.000Z",
                city: "Skopje",
                community: "Vodno",
                place: "HUB"
            },
            {
                type: "ingrDonation",
                time: "17:00 - 18:00",
                date: "2016-11-01T23:00:00.000Z",
                city: "Skopje",
                community: "Vodno",
                place: "HUB"
            },
            {
                type: "mealDonation",
                time: "11:30",
                date: "2016-12-05T23:00:00.000Z",
                city: "Skopje",
                community: "Aerodrom",
                place: "Capitol"
            },
            {
                type: "mealPrep",
                time: "18:30",
                date: "2016-11-04T23:00:00.000Z",
                city: "Skopje",
                community: "Vodno",
                place: "HUB"
            },
            {
                type: "ingrDonation",
                time: "17:00 - 18:00",
                date: "2016-11-04T23:00:00.000Z",
                city: "Skopje",
                community: "Vodno",
                place: "HUB"
            }
        ]
    };

    return data;
}



function getGalleryImages() {

    var data = {
        images: [
            {
                src: "./img/gallery/1.jpg",
                text: "датум: 26.11.2016"
            },
            {
                src: "./img/gallery/2.jpg",
                text: "датум: 19.11.2016"
            },
            {
                src: "./img/gallery/3.jpg",
                text: "датум: 12.11.2016"
            },
            {
                src: "./img/gallery/4.jpg",
                text: "датум: 5.11.2016"
            },
            {
                src: "./img/gallery/7.jpg",
                text: "датум: 19.10.2016"
            },
            {
                src: "./img/gallery/8.jpg",
                text: "датум: 12.10.2016"
            },
            {
                src: "./img/gallery/9.jpg",
                text: "датум: 5.10.2016"
            },
            {
                src: "./img/gallery/10.jpg",
                text: "датум: 19.09.2016"
            },
            {
                src: "./img/gallery/11.jpg",
                text: "датум: 12.10.2016"
            }
        ]
    }

    return data;
}

function getLinks() {
    var data = {
        donateLink: '#/donate',
        cookLink: '#/cook'
    }

    return data;
}