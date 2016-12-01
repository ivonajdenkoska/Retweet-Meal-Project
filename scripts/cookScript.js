
function onActionForm3(event) {
    event.preventDefault();

    var ime = $("#input-1").val();
    var prez = $("#input-2").val();
    var broj = $("#input-3").val();
    var mail = $("#input-4").val();
    var datum = $(".list-group-item.active").attr('value');
    if (typeof datum == 'undefined')
        datum = '';

    var but = $("#kopceNam").is(":checked") || $("#kopceGot").is(":checked");

    if (ime.length == 0 || prez.length == 0 || broj.length == 0 || mail.length == 0 || datum.length == 0 || !but) {
        if (ime.length == 0)
            $("#warning1").show();
        else
            $("#warning1").hide();
        if (prez.length == 0)
            $("#warning2").show();
        else
            $("#warning2").hide();
        if (broj.length == 0)
            $("#warning3").show();
        else
            $("#warning3").hide();
        if (mail.length == 0)
            $("#warning4").show();
        else
            $("#warning4").hide();
        if (datum.length == 0)
            $("#warning5").show();
        else
            $("#warning5").hide();
        if (!but)
            $("#warning6").show();
        else
            $("#warning6").hide();

    }
}