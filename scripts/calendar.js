function getPrevMonth() {
    var prevMonth = months[getPrevMonthIndex()];
    return prevMonth;
}

function getPrevMonthIndex() {
    var month = getCurrentMonth(); // 0 - 11
    return (month - 1) % 12;
}

function getRows() {

    var data = [];
    var dateCounter = 0;
    for (var i = 0; i < 5; i++) {
        var row = getRow(i + 1, dateCounter);
        data.push(row);
        if (dateCounter == 0) {
            var firstDay = getFirstDayDateFromCurrentMonth().getDay();
            dateCounter += (7 - firstDay + 1);
            // console.log('after that, data counter is: ' + dateCounter);
        } else {
            dateCounter += 7;
            // console.log('data counter is: ' + dateCounter);
        }
    }

    // console.dir(data);
    return data;
}

function getRealDate(date, month) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    // console.log('date: ' + date);
    // console.log('month: ' + month);
    var realDate = new Date(currentYear, month, date);
    return realDate.getDate() + " " + (realDate.getMonth() + 1) + " " + realDate.getFullYear();
}

function getRow(row, dateCounter) {

    var allColumnsInRow = [];
    var realFirstDay = getFirstDayDateFromCurrentMonth().getDay();
    var firstDay = realFirstDay - 1; // everything else starts from 0, except of days;
    var prevMonth = getPrevMonth();
    var daysPrevMonth = prevMonth.numDays;
    var howMany = 7 - realFirstDay;
    var from = daysPrevMonth - howMany + 1;
    // console.log('howmany ' + howMany);
    // console.log('daysprm ' + daysPrevMonth);

    for(var i = 0; i < 7; i++) {
        if (dateCounter == 0) {
            if (row * i == firstDay) {
                // console.log('yey first day is: ' + firstDay + ' in row: ' + row);
                dateCounter = 1;
            } else {
                // od prethodniot mesec
                var column = {
                    date: from + " " + prevMonth.shortName.toUpperCase(),
                    realDate: getRealDate(from, prevMonth.ord)
                }
                allColumnsInRow.push(column);
                from++;
            }
        }

        if (dateCounter != 0) {
            var column = {
                date: dateCounter + " " + months[getCurrentMonth()].shortName.toUpperCase(),
                realDate: getRealDate(dateCounter, getCurrentMonth())
            }
            allColumnsInRow.push(column);
            dateCounter++;
        }
    }

    var data = {
        row: allColumnsInRow
    }

    return data;
}


Handlebars.registerHelper('getCellDate', function(
    position,
    firstDayPosition) {

    // console.dir(position);
    // console.log('position: ' + position + " first day position: " + firstDayPosition);
});


Handlebars.registerHelper('hasEvent', function (date, options) {

    var data = getEventDates();
    var events = data.events;
    var found = false;
    var i;
    var theEvent = null;

    for(i = 0; i < events.length; i++) {
        var event = events[i];
        if (event.date == date) {
            theEvent = event;
            found = true;
            break;
        }
    }

    return (found) ? options.fn({ event: theEvent }) : '';
});

Handlebars.registerHelper('getEventType', function (event) {
    if (event.type == 0) {
        return "Донација на оброци";
    } else if (event.type == 1) {
        return "Донација на намирници";
    } else if (event.type == 2) {
        return "Собир за готвење";
    }
    return "";
});

