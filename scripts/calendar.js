Handlebars.registerHelper("displayMonthOrd",
        function (obj) {

    // var monthName = obj.currentMonth.name;
    // var ordinalNum = months[monthName].ordinalNum;
    // console.log('wkdpw');
    // console.dir(monthName);

});

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
            console.log('after that, data counter is: ' + dateCounter);
        } else {
            dateCounter += 7;
            console.log('data counter is: ' + dateCounter);
        }
    }

    console.dir(data);
    return data;
}

function getRow(row, dateCounter) {

    var allColumnsInRow = [];
    var realFirstDay = getFirstDayDateFromCurrentMonth().getDay();
    var firstDay = realFirstDay - 1; // everything else starts from 0, except of days;
    var prevMonth = getPrevMonth();
    var daysPrevMonth = prevMonth.numDays;
    var howMany = 7 - realFirstDay;
    var from = daysPrevMonth - howMany - 1;
    console.log('howmany ' + howMany);
    console.log('daysprm ' + daysPrevMonth);

    for(var i = 0; i < 7; i++) {
        if (dateCounter == 0) {
            if (row * i == firstDay) {
                console.log('yey first day is: ' + firstDay + ' in row: ' + row);
                dateCounter = 1;
            } else {
                // od prethodniot mesec
                var column = {
                    date: from + " " + prevMonth.shortName
                }
                allColumnsInRow.push(column);
                from++;
            }
        }

        if (dateCounter != 0) {
            var column = {
                date: dateCounter + " " + months[getCurrentMonth()].shortName
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

Handlebars.registerHelper('getFirstDatePosition', function () {

});

Handlebars.registerHelper('getCellDate', function(
    position,
    firstDayPosition) {

    console.dir(position);
    console.log('position: ' + position + " first day position: " + firstDayPosition);
});

Handlebars.registerHelper('getRowsNum', function () {
    console.log('get rows');
    // return 5;
});

Handlebars.registerHelper('getColumnsNum', function () {
    console.log('get cols');
    // return 7;
});